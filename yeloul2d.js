//閫夋嫨live2d鍙�/鎽囨憞鍙�/roll鐐规姇鎺峰彾
$(document).ready(function () {
    var select = document.getElementById("duqian");
    var add = document.createElement("p");
    add.setAttribute("id", "selectye");
    select.before(add);
    add.innerHTML =
        '<select id="select_xiaoye"><option>璇烽€夋嫨</option><option value="live2dye">鏄剧ずlive2d鍙�</option><option value="yaoyaoye">鏄剧ず鎽囨憞鍙�</option><option value="rollye">鏄剧ずroll鐐规姇鎺峰彾</option></select>';
	$("#select_xiaoye").change(function () {
		var isXiaoyeSeen = $("#select_xiaoye").val();
		if(isXiaoyeSeen=="yaoyaoye"){
			localStorage.selectye="yaoyaoye";
			window.location.reload();
		}else if(isXiaoyeSeen=="rollye"){
			localStorage.selectye="rollye";
			window.location.reload();
		}else{
			localStorage.selectye="live2dye";
			window.location.reload();
		}
});
});
const home_Path = "https://www.yeallye.com/";//鑴氭湰鍦板潃
const message_Path = "https://www.yeallye.com/live2d/message.json"; 
// 灏佽寮傛鍔犺浇璧勬簮鐨勬柟娉�
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

var selectye=localStorage.selectye;
if(selectye=="yaoyaoye"){
	loadExternalResource(home_Path + "yelou/yaoyaoye/yaoyaoye.js", "js")
}else if(selectye=="rollye"){
	loadExternalResource(home_Path + "yelou/yetou/yetou_skin1.js", "js")
}else{
	$("#contentdiv").prepend('<div class="yeLive"><div class="ye_sayings live2d" style="opacity:0"></div><canvas id="live2d" width="800" height="900" class="live2d"></canvas><span id=chatYe onclick=$("#yechatdiv").toggle()>鑱�</span></div><div id=yechatdiv style="display: none;"><input id=yechatinput  autocomplete="off"><button id=yechatsubmit>鍙戦€�</button></div>');
	
	// 鍔犺浇 css js
	Promise.all([
		loadExternalResource(home_Path + "live2d/css/live2d.css", "css"),
		loadExternalResource(home_Path + "live2d/js/live2d.js", "js"),
		loadExternalResource(home_Path + "live2d/js/message.js", "js")
	]).then(() => {
		loadlive2d("live2d", "https://www.yeallye.com/live2d/model/tia/model.json");
	});
}
