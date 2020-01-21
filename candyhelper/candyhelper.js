$("body").prepend('<link rel="stylesheet" href="https://raw.githack.com/Aenigma-fishriver/GhjSzd/master/candyhelper/candyhelper.css"><span class="ghj_sayings"></span><div class="ghjLive"><span class="ghjLiveDot" Onclick="showMessage(ghj_saying,5000)"></div></span><div id=ghjchatdiv style="display: none;"><input id=ghjchatinput  autocomplete="off"><button id=ghjchatsubmit>鍙戦€�</button></div>')
$(document).ready(function () {
    var select = document.getElementById("duqian");
    var add = document.createElement("p");
    add.setAttribute("id", "ghjDocarateDiv");
    select.before(add);
    add.innerHTML =
        '<a href="javascript:;" Onclick="$(&apos;#ghjTalk&apos;).toggle()">灏忓彾蹇嵎瀵硅瘽</a><br><p id="ghjTalk" style="display: none;">閫夋嫨灏嗗唴瀹瑰彂閫佸埌甯栧瓙涓椂浼氬嚭鐜颁竴瀹氬欢杩熴€�'+ghjTalkSelect+'</p><div id="show_candyhelper" onclick="judgecandyhelper();">鎵嬫満绔樉绀烘垨闅愯棌灏忓彾</div>';
    $("#ghjTalking").change(function () {
    	$("#ghjchatdiv").css("display","")
        $("#ghjchatinput").val(
            $("#ghjTalking").val() 
        );
    });
});
var windowWidth = $(window).width();
function judgecandyhelper(){
	if(windowWidth<=900){
		var isXiaoyeSeen = localStorage.xiaoye;
		if(isXiaoyeSeen=="false"){
			localStorage.xiaoye=true;
			$(".ghjLive").css("display","");
		}else{
			localStorage.xiaoye=false;
			$(".ghjLive").css("display","none");
		}
	}
}
if(windowWidth<=900){
var isXiaoyeSeen = localStorage.xiaoye;
	if(isXiaoyeSeen!="false"){
		$(".ghjLive").css("display","");
	}else{
		$(".ghjLive").css("display","none");
	}
}
//var ghjTalkSelect =
    //'<select id="ghjTalking"><option>1夋嫨瀵硅瘽鍐呭</option><option value="story/t鍐呭s">缁橻鍐呭]鐢熸垚鎯呰妭骞跺彂閫佸埌甯栧瓙閲�</option><option value="/cp鏁板瓧1/鏁板瓧2s">鐢熸垚[鏁板瓧2]涓猍鏁板瓧1]绉嶇被cp锛岀粨鍚堟儏鑺傚彂閫佸埌甯栧瓙鍐�</option>	<option value="@鍙舵ゼ鏈哄櫒浜�">璁╁彾鍙舵妸浣犵殑璇濊浆杈剧粰鍙舵ゼ鏈哄櫒浜�</option>		<option value="閫夎儗鏅�">璁╁彾鍙跺府鍔╅€夋嫨鑳屾櫙</option>	<option value="roll鐐逛笖涓嶅彂閫�">roll鐐硅€屼笖涓嶅彂閫佺粨鏋滃埌甯栧瓙閲�</option>	<option value="roll鐐�">roll鐐逛笖鍙戦€佺粨鏋滃埌甯栧瓙閲�</option>	<option value="roll鐐�/t鍐呭">瀵硅嚜瀹氫箟鍐呭杩涜roll鐐逛笖鍙戦€佺粨鏋滃埌甯栧瓙閲�</option>	<option value="paro">闅忔満涓€涓猵aro</option>	<option value="sendparo">闅忔満涓€涓猵aro骞跺彂鍒板笘瀛愰噷</option>	<option value="gift鍐呭">閫佺粰鍙跺彾鑷畾涔夌ぜ鐗╋紙璇峰皢鈥滃唴瀹光€濇敼涓鸿嚜瀹氫箟绀肩墿锛�</option>	<option value="gift">鍙跺彾闅忔満浣跨敤绀肩墿鐩掍腑鐨勭ぜ鐗╁苟涓斿彂鍒板笘瀛愰噷</option>	<option value="sendgift">鍦ㄥ笘瀛愰噷鍙戝嚭鏉ュ彾鍙剁ぜ鐗╅噷鐨勪笢瑗块兘鏈変粈涔�</option>	<option value="eat鍐呭">閫佺粰鍙跺彾鑷畾涔夐鐗╋紙璇峰皢鈥滃唴瀹光€濇敼涓鸿嚜瀹氫箟椋熺墿锛�</option>	<option value="eat">鍙跺彾闅忔満浣跨敤椋熺洅涓殑椋熺墿骞朵笖鍙戝埌甯栧瓙閲�</option>	<option value="story">鐢熸垚涓€涓殢鏈哄墽鎯�</option><option value="story鏁板瓧">鐢熸垚杈撳叆鏁板瓧涓殑涓€涓插墽鎯�</option><option value="saolei1">鐢熸垚鏂扮殑鎵浄</option><option value="sendsaolei">鍙戦€佹壂闆峰埌甯栧瓙涓�</option><option value="/sao琛屾暟/鍒楁暟">鎵浄鏌愪釜鏍煎瓙</option><option value="llk">鐢熸垚鏂扮殑杩炶繛鐪�</option><option value="sendllk">鍙戦€佽繛杩炵湅鍒板笘瀛愪腑</option><option value="llk/s琛屾暟/鍒楁暟">鏌ョ湅杩炶繛鐪嬫煇涓牸瀛愭槸浠€涔�</option><option value="llk/m琛屾暟1/鍒楁暟1/琛屾暟2/鍒楁暟2">鍖归厤(琛屾暟1锛屽垪鏁�1)(琛屾暟2锛屽垪鏁�2)鐨勮繛杩炵湅鏍煎瓙</option><option value="鏌愬湴澶╂皵">鍚戝彾鍙舵煡璇㈠ぉ姘�</option>		<option value="鎺ㄦ枃">闅忔満鎺ㄦ枃锛堟湭瀹屽杽锛�</option></select>'; 
//鍙充笅瑙掑璇濆唴瀹�
var ghj_saying = [
    "砍他，我会心疼",
    "背我！",
    "我在等你点我，只要520",
    "<img src=https://i.loli.net/2019/10/29/NtfHk71Lp4DUXcZ.jpg>",
    "<img src=https://i.loli.net/2019/11/06/Zyz5NPYfW6Fibja.gif>",
    <a id="ghj_random_href1" target="_blank" onclick ="GhjRandomHref1()">🌸🐰</a>
];
//鍙充笅瑙掑璇濆嚱鏁�
function showMessage(text, timeout) {
    if (Array.isArray(text))
        text = text[Math.floor(Math.random() * text.length + 1) - 1];
    $(".ghj_sayings").stop();
    $(".ghj_sayings")
        .html(text)
        .fadeTo(200, 1);
    if (timeout === null) timeout = 5000;
    hideMessage(timeout);
}

function hideMessage(timeout) {
    $(".ghj_sayings")
        .stop(true)
        .css("opacity", 1);
    if (timeout === null) timeout = 5000;
    $(".ghj_sayings")
        .delay(timeout)
        .fadeTo(200, 0);
}
$(".ghjLiveDot").hover(function () {
    $(".ghjLive span").css(
      "background-image",
      "url(https://s2.ax1x.com/2019/12/06/QJXWwT.png)"
    );
    showMessage("我不闲,我很甜", 3000)
}, function () {
    $(".ghjLive span").css("background-image", "url(https://ftp.bmp.ovh/imgs/2019/11/6bddc7a452775372.png)")
});
//鏉ヤ釜鍏旇€虫湹锛�
//换装饰
/*...var yeHatLocal = localStorage.yeHat;
if (yeHatLocal == "rabbit") {
    var Hatindex = 1;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot rabbit');
    $(".ye_sayings").css("bottom", "180px");
} else if (yeHatLocal == "cat") {
    var Hatindex = 2;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot cat');
} else if (yeHatLocal == "hudiejie") {
    var Hatindex = 3;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot hudiejie');
} else if (yeHatLocal == "long") {
    var Hatindex = 4;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot long');
} else if (yeHatLocal == "nvpu") {
    var Hatindex = 5;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot nvpu');
} else if (yeHatLocal == "huli") {
    var Hatindex = 6;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot huli');
    $(".ye_sayings").css("bottom", "140px");
} else if (yeHatLocal == "yezi") {
    var Hatindex = 7;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot yezi');
    $(".ye_sayings").css("bottom", "140px");
} else if (yeHatLocal == "shengdan") {
    var Hatindex = 8;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot shengdan');
    $(".ye_sayings").css("bottom", "160px");
} else if (yeHatLocal == "movefox") {
    var Hatindex = 9;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot movefox');
} else if (yeHatLocal == "moveyezi") {
    var Hatindex = 10;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot moveyezi');
    $(".ye_sayings").css("bottom", "140px");
} else if (yeHatLocal == "winterhat") {
    var Hatindex = 11;
    $('.yeLiveDot').removeClass().addClass('yeLiveDot winterhat');
} else {
    var Hatindex = 0;
}
var isFirstOpen = localStorage.yeHat == undefined ? true : false;
var backgroundYe = ["", "rabbit", "cat", "hudiejie", "long", "nvpu", "huli", "yezi", "shengdan", "movefox", "moveyezi", "winterhat"];
*/
/*...function changeYeye() {
    Hatindex = (Hatindex + 1) % backgroundYe.length;
    var hat = backgroundYe[Hatindex];
    localStorage.setItem("yeHat", hat);
    $('.yeLiveDot').removeClass().addClass('yeLiveDot ' + hat);
    if (hat == "rabbit") {
        $(".ye_sayings").css("bottom", "180px");
    } else if (hat == "huli") {
        $(".ye_sayings").css("bottom", "140px");
    } else if (hat == "yezi") {
        $(".ye_sayings").css("bottom", "140px");
    } else if (hat == "shengdan") {
        $(".ye_sayings").css("bottom", "160px");
    } else if (hat == "moveyezi") {
        $(".ye_sayings").css("bottom", "140px");
    } else {
        $(".ye_sayings").css("bottom", "120px");
    }
};*/

/*..$('.ghjLive span').after("<span id=changeYe onclick='changeYeye()'>鎹�</span>");
$('.ghjLive span').after("<span id=chatYe onclick=$('#yechatdiv').toggle()>鑱�</span>");
function judgehours(hours){
	if(windowWidth >= 900){
	if (hours >= 0 && hours <= 5) {
 聽 聽 showMessage('涓嶈鐔浜嗭紒蹇幓鐫″惂',10000);
   } else if (hours > 5 && hours <= 10) {
 聽 聽 showMessage('鏃╀笂濂�',10000);
   } else if (hours > 10 && hours <= 14) {
 聽 聽 showMessage('涓崍濂�',10000);
   } else if (hours > 14 && hours <= 18) {
 聽 聽 showMessage('涓嬪崍濂�',10000);
   } else if (hours > 18 && hours <= 22) {
 聽 聽 showMessage('鏅氫笂濂�',10000);
   }else if (hours > 22 && hours <= 24) {
 聽 聽 showMessage('蹇幓鐫¤鍚�',10000);
   }
	}
}
var timeNow = new Date();
var daynow=timeNow.getDate();
var hoursnow = timeNow.getHours();
if (localStorage.daynow) {
	if(localStorage.hoursnow!=hoursnow&&localStorage.daynow==daynow){
		localStorage.hoursnow=hoursnow;
		judgehours(hoursnow);
	}else if(localStorage.daynow!=daynow){
		localStorage.daynow=daynow;
		localStorage.hoursnow=hoursnow;
		judgehours(hoursnow);
	}
} else {
    localStorage.daynow=daynow;
		localStorage.hoursnow=hoursnow;
		judgehours(hoursnow);
}
$("#ghjchatsubmit").click(function(){
	var content = $("#ghjchatinput").val();
	if(content.length<1){alert('鍐呭涓嶅緱灏忎簬1涓瓧绗�');return false;}
	else{
		$("#ghjchatsubmit").text("鍙戦€佷腑");
		$("#ghjchatsubmit").attr("disabled","disabled");
		$("#ghjchatinput").attr("disabled","disabled");
		$("#ghjchatinput").val("")
	     $.ajax({
			url : "https://www.yeallye.com/yerobot/api/comment/ye.php",
			type : "POST",
	                dataType: "json",
			data:{content:content}, 
			success:function(json){
				data=json;
	            if(data.needfatie=="2"){
	            	showMessage(data.reply,5000);
	            $("#yechatsubmit").text("鍙戦€�");
	            $("#yechatsubmit").removeAttr("disabled");
	            $("#yechatinput").removeAttr("disabled");
	            	$("#yechatinput").focus();}
	            	else if(data.needfatie=="1"){
	            	showMessage(data.reply+",灏嗗彂閫佺粨鏋滃埌甯栧瓙涓�",5000);
	            	$("#wenbenkuang").val(data.reply);
	            $("#replybtt").click();}else{
				showMessage("鍑洪敊浜�",5000);
	            	$("#yechatsubmit").text("鍙戦€�");
	            $("#yechatsubmit").removeAttr("disabled");
	            $("#yechatinput").removeAttr("disabled");
	            	$("#yechatinput").focus();
	            };
			},
	error:function(jqXHR ,textStatus , errorThrown){
	alert(jqXHR.responseText+textStatus+errorThrown);
	$("#yechatsubmit").text("鍙戦€�");
	$("#yechatsubmit").removeAttr("disabled");
	$("#yechatinput").removeAttr("disabled");
	$("#yechatinput").focus();
	}
		});
	};
});
$('#yechatinput').bind('keypress',function(event){ 
         if(event.keyCode == 13){  
             $("#yechatsubmit").click();  
         }  
     });
function judgehours(hours){
	if(windowWidth >= 900){
		var yetounn = localStorage.yetounn;
		if (yetounn==null||yetounn==""||yetounn=="鏃犳樀绉�"){
			yetounn=""
		}else{yetounn="锛�"+yetounn+""};
	if (hours >= 0 && hours <= 5) {
 聽 聽 showMessage('涓嶈鐔浜嗭紒蹇幓鐫″惂'+yetounn,10000);
   } else if (hours > 5 && hours <= 10) {
 聽 聽 showMessage('鏃╀笂濂�'+yetounn,10000);
   } else if (hours > 10 && hours <= 14) {
 聽 聽 showMessage('涓崍濂�'+yetounn,10000);
   } else if (hours > 14 && hours <= 18) {
 聽 聽 showMessage('涓嬪崍濂�'+yetounn,10000);
   } else if (hours > 18 && hours <= 22) {
 聽 聽 showMessage('鏅氫笂濂�'+yetounn,10000);
   }else if (hours > 22 && hours <= 24) {
 聽 聽 showMessage('蹇幓鐫¤鍚�'+yetounn,10000);
   }
	}
}*/
var timeNow = new Date();
var daynow=timeNow.getDate();
var hoursnow = timeNow.getHours();
if (localStorage.daynow) {
	if(localStorage.hoursnow!=hoursnow&&localStorage.daynow==daynow){
		localStorage.hoursnow=hoursnow;
		judgehours(hoursnow);
	}else if(localStorage.daynow!=daynow){
		localStorage.daynow=daynow;
		localStorage.hoursnow=hoursnow;
		judgehours(hoursnow);
	}
} else {
    localStorage.daynow=daynow;
		localStorage.hoursnow=hoursnow;
		judgehours(hoursnow);
}

var all_ghj_href_one = [
    "https://m.weibo.cn/5234075079/4376309977025951",
    "https://m.weibo.cn/5234075079/4376328227166957",
    "https://m.weibo.cn/3993573986/4384518439642170",
    "https://m.weibo.cn/6443587118/4308220538980641",
    "https://m.weibo.cn/6457832661/4368362479993299",
    "https://m.weibo.cn/3485182815/4358839975214209",
    "https://m.weibo.cn/3485182815/4358886515291301",
    "https://m.weibo.cn/6443587118/4358846257836816",
    "https://m.weibo.cn/6602773697/4358908917313932",
    "https://i.loli.net/2019/08/06/vIsMZk7LaQmGOj6.jpg",
    "https://m.weibo.cn/6552667925/4362827101572032",
    "https://i.loli.net/2019/08/06/yx7PlWzmNpi5jd8.gif",
    "https://imgchr.com/i/e497dS",
    "https://m.weibo.cn/6979966385/4377802462132876",
    "https://m.weibo.cn/5212412366/4378858386212943",
    "https://m.weibo.cn/5531250302/4236467850987849",
    "https://m.weibo.cn/5352797864/4256328673016404",
    "https://m.weibo.cn/5531250302/4259962655809809",
    "https://m.weibo.cn/6440390848/4299835765414765",
    "https://m.weibo.cn/3181504700/4359131575435072",
    "https://m.weibo.cn/6602773697/4358892517171035",
    "https://m.weibo.cn/3485182815/4359138601896078",
    "https://m.weibo.cn/5967513378/4350616049018093",
    "https://m.weibo.cn/6443587118/4241540303971196",
    "https://i.loli.net/2019/08/07/29GCNxudIKLhAik.jpg",
    "https://m.weibo.cn/6055363231/4378005406913437",
    "https://m.weibo.cn/5255081991/4331950661665342",
    "https://imgchr.com/i/eojwqK",
    "https://i.loli.net/2019/08/08/ShAMUNHX3fzcl8Z.jpg",
    "https://i.loli.net/2019/08/08/l3BvqZay2Qwi9p4.jpg",
    "https://m.weibo.cn/7019747772/4374473807252539",
    "https://m.weibo.cn/6443587118/4249149249600951",
    "https://m.weibo.cn/6552667925/4308892366168483",
    "https://m.weibo.cn/6552667925/4308873957844986",
    "https://m.weibo.cn/3250287550/4312932546121532",
    "https://m.weibo.cn/6602773697/4393345973002009"
];
/*..var all_ghj_href_two = [
    "https://shimo.im/docs/vYWhQw6XwKRHr3CT",
    "https://github.com/mizhiyugan529/yelou"
];
var all_ghj_href_three = [
    "https://www.nmmnm.co/showmsg/forumid/5/id/7638705?page=1",
    "https://www.nmmnm.co/showmsg/forumid/5/id/5751335?page=1",
    "https://www.nmmnm.co/showmsg/forumid/5/id/7b2b5005?page=1",
    "https://www.nmmnm.co/showmsg/forumid/5/id/3a664099?page=1",
    "https://www.nmmnm.co/showmsg/forumid/5/id/5b5cc008032927?page=1",
    "http://bbs.jjwxc.net/showmsg.php?board=3&id=1627917",
    "http://xqwh.org/viewtopic.php?f=2&t=40638"
];*/

function GhjRandomHref1() {
    $("#ghj_random_href1").attr(
        "href",
        all_ghj_href_one[Math.floor(Math.random() * all_ghj_href_one.length)]
    );
}

/*..function GhjRandomHref2() {
    $("#ghj_random_href2").attr(
        "href",
        all_ghj_href_two[Math.floor(Math.random() * all_ghj_href_two.length)]
    );
}

function GhjRandomHref3() {
    $("#ghj_random_href3").attr(
        "href",
        all_ghj_href_three[Math.floor(Math.random() * all_ghj_href_three.length)]
    );
}*/
