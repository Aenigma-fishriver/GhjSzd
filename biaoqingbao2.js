var ye_call_board = "";
$("body").prepend("<style>.xiu {background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #5a4d30), color-stop(0.15, #918157), color-stop(0.3, #cfa520), color-stop(0.45, #5a4d30), color-stop(0.6, #cfa520), color-stop(0.75, #b4a120), color-stop(0.9, #bfa66e), color-stop(1, #cfa520)) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}.xiu a {background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #5a4d30), color-stop(0.15, #918157), color-stop(0.3, #cfa520), color-stop(0.45, #5a4d30), color-stop(0.6, #cfa520), color-stop(0.75, #b4a120), color-stop(0.9, #bfa66e), color-stop(1, #cfa520)) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}.zheyingbu {color: transparent;}.zheyingbu:hover {color: #000;}</style>")
$(document).ready(function () {
	$("div.text-success").before("<div align='center' id='YeCallBoard'></div>");
    $("#YeCallBoard").html(ye_call_board);
    $("#acn").before('<div class="am-tab-panel am-fade" id="yelou"></div>');
    $(".am-tabs-nav.am-nav.am-nav-tabs").prepend("<li id='yeloubqb' class><a href='#yelou'>蹇ч儊灏忕尗鐚�</li>");
    $("#yeclj").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<a href="閾炬帴" target="_blank">鐐规垜灏辩湅XXX</a>');
    });
    $("#yejsjbz").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<font class="xiu">鏂囧瓧</font>');
    });
    $("#yezyb").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<font class="zheyingbu">鏂囧瓧</font>');
    });
    $("#yeloubqb").on("click", function() {
      var imglist = [
        "https://i.loli.net/2019/10/27/lF9QtjMuP8dNXbS.png",
        "https://i.loli.net/2019/10/27/TYyuIAPOUXJcpCD.png",
        "https://i.loli.net/2019/10/27/dp3RFBP64rgHCTE.png",
        "https://i.loli.net/2019/10/26/JBXecHnSt9ioZfP.png",
        "https://i.loli.net/2019/10/27/qTSQ4lYpUOtaGuC.png",
        "https://s2.ax1x.com/2019/10/27/Kr0GIf.png",
        "https://i.loli.net/2019/10/26/Zve39x5h1qlQfgR.gif",
        "https://i.loli.net/2019/10/26/NTOCMmZF1eJsoj6.png",
        "https://i.loli.net/2019/10/26/yXmt7lWqD1Ywi6S.png",
        "https://i.loli.net/2019/10/26/gvjOKemIXtEdpNk.png",
        "https://ftp.bmp.ovh/imgs/2019/10/e52d7c9fa62ced37.png",
        "https://ftp.bmp.ovh/imgs/2019/10/26f79afe1c3b161f.png",
        "https://ftp.bmp.ovh/imgs/2019/10/fd51e11daee367c5.png",
        "https://i.loli.net/2019/10/26/4QJt9hk8rzjlCLF.gif",
        "https://i.loli.net/2019/10/26/4sHvdSymTAa8ZpW.png",
        "https://i.loli.net/2019/10/26/fPizYnd5AlHJgDC.png",
        "https://ftp.bmp.ovh/imgs/2019/10/17a7604be8a7564d.png",
        "https://i.loli.net/2019/10/26/VYCmGIwRcd5bHL8.jpg",
        "https://i.loli.net/2019/10/26/joV7kMRKcyEBJIQ.jpg",
        "https://i.loli.net/2019/10/26/65rYspZl2SuwUBv.jpg",
        "https://i.loli.net/2019/11/01/6neP23umxziQKMs.gif",
        "https://i.loli.net/2019/10/26/KYg6xoCTrEJVMip.gif",
        "https://i.loli.net/2019/11/01/MJ4bPOmsc8fh69l.png",
        "https://i.loli.net/2019/11/01/aNgMZXrcm51dCfT.png",
        "https://i.loli.net/2019/11/01/feN3p4DBz7RT2x6.png",
        "https://i.loli.net/2019/10/26/sfSDeYJVNXwohCi.jpg",
        "https://ftp.bmp.ovh/imgs/2019/10/fdfea20f565d2e45.png",
        "https://ftp.bmp.ovh/imgs/2019/10/578796363eeafb1e.gif"
      ];
      $("#yelou").empty();
      for (var b = 0; b < imglist.length; b++) {
        var biaoqing =
          "<img src='" +
          imglist[b] +
          "' class='emot-class' Onclick='addemot(\"" +
          imglist[b] +
          "\")'>";
        $("#yelou").append(biaoqing);
      }
      $("#yelou").append(
        '<br><font id="yeclj">瓒呴摼鎺ヤ唬鐮�</font> 聽<font id="yejsjbz" class="xiu">閲戣壊娓愬彉瀛椾唬鐮�</font> 聽<font id="yezyb">閬奖姝ヤ唬鐮�</font> 聽<font id="yejgg">缁欏彾妤煎姞鍏憡</font> 聽<font id="yebwz"><b>鍔犵矖</b></font>聽<font id="yehwz" color=red><b>鍔犵孩</b></font>'
      );
      $("#yeclj").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() +
            '<a href="閾炬帴" target="_blank">鐐规垜灏辩湅XXX</a>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#yejsjbz").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() + '<font class="xiu">鏂囧瓧</font>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#yezyb").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() + '<font class="zheyingbu">鏂囧瓧</font>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#yejgg").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() +
            '<scri'+'pt>ye_call_board="鏂囧瓧鎴栭摼鎺�/鍥剧墖浠ｇ爜"</sc'+'ript>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#yebwz").on("click", function() {
        $("#wenbenkuang").val($("#wenbenkuang").val() +'<b>鏂囧瓧</b>');
        $(".am-tabs-bd").hide();
      });
      $("#yehwz").on("click", function() {
        $("#wenbenkuang").val($("#wenbenkuang").val() +'<font color=red><b>鏂囧瓧</b></font>');
        $(".am-tabs-bd").hide();
      });
      $(".am-tabs-bd").show();
    });
});
