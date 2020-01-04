var Ghj_call_board = "";
$("body").prepend("<style>.firstfloorlink {background-image: linear-gradient(90deg, rgba(255,139,110,1) 0%, rgba(233,150,62,1) 50%, rgba(255,139,110,1) 100%) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}.firstfloorlink a {background-image: linear-gradient(90deg, rgba(233,150,62,1) 0%, rgba(255,139,110,1) 50%, rgba(233,150,62,1) 100%) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}.heijin {background-image: linear-gradient(90deg, rgba(0,0,0,1) 5%, rgba(238,97,35,1) 50%, rgba(0,0,0,1) 95%) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}</style>")
$(document).ready(function () {
	$("div.text-success").before("<div align='center' id='GhjCallBoard'></div>");
    $("#GhjCallBoard").html(Ghj_call_board);
    $("#acn").before('<div class="am-tab-panel am-fade" id="GhjSzd"></div>');
    $(".am-tabs-nav.am-nav.am-nav-tabs").prepend("<li id='ghjbqb' class><a href='#GhjSzd'>桂花酒专属</li>");
    $("#clj").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<a href="链接" target="_blank">点我就看</a>');
    });
    $("#fcjbz").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<font class="firstfloorlink">文字</font>');
    });
    $("#hjjbz").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<font class="heijin">文字</font>');
    });
    $("#wbk").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<textarea class="form-control">文字或代码</textarea>');
    });
    $("#aaa").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊');
    });
    $("#ghjbqb").on("click", function() {
      var imglist = [
        "https://i.loli.net/2019/10/28/CV2Y7mgfPihEHSw.jpg",
        "https://i.loli.net/2019/10/28/c3fUIkh9KZ5LyDi.jpg",
        "https://i.loli.net/2019/10/28/rLuiUsZwS43DVhH.jpg",
        "https://i.loli.net/2019/10/29/pZUHPfyiFGvhlNA.jpg",
        "https://i.loli.net/2019/10/29/XAaZBoJHr8MKl2d.jpg",
        "https://i.loli.net/2019/10/29/V8vtdxUfuOJqb47.jpg",
        "https://i.loli.net/2019/10/29/Rwhqg42fHXl8osz.jpg",
        "https://i.loli.net/2019/10/29/dOo9nLufCjB1qUP.jpg",
        "https://i.loli.net/2019/10/29/Lmc8N3QTtiOJlUb.gif",
        "https://i.loli.net/2019/10/29/On3hi6oeY9fFqN2.gif",
        "https://i.loli.net/2019/11/06/iv2fjc6G91PY7xh.gif",
        "https://i.loli.net/2019/11/04/pvAJ1ug7jw9CNRt.gif",
        "https://i.loli.net/2019/11/08/UYNJfIkeGA1qd4T.gif",
        "https://i.loli.net/2019/10/28/cuJ7tI13rpUy6Qg.jpg",
        "https://i.loli.net/2019/10/28/qX7bweSf2jaYQKH.jpg",
        "https://i.loli.net/2019/10/29/lMb6dN5pa8A9gzk.gif",
        "https://i.loli.net/2019/10/29/iDLA6fjyP79OZMo.gif",
        "https://i.loli.net/2019/10/29/dkNMv4XQByUsqpR.gif",
        "https://i.loli.net/2019/10/29/5BcKV6h7rdCTZe3.gif",
        "https://i.loli.net/2019/10/29/LDh3M9eYKvxXzVu.gif",
        "https://i.loli.net/2019/10/29/Pm4LjS32Dl7vgc8.gif",
        "https://i.loli.net/2019/11/10/dD7mtTkyfCKIbw6.gif",
        "https://i.loli.net/2019/11/08/VW2nmP1sCN86DEp.gif",
        "https://i.loli.net/2019/11/06/9duQe4lKwaqn2Jc.gif",
        "https://i.loli.net/2019/10/29/NtfHk71Lp4DUXcZ.jpg",
        "https://i.loli.net/2019/10/29/wZ8MhdYHLkatIuS.jpg",
        "https://i.loli.net/2019/11/06/Zyz5NPYfW6Fibja.gif"
      ];
      $("#GhjSzd").empty();
      for (var b = 0; b < imglist.length; b++) {
        var biaoqing =
          "<img src='" +
          imglist[b] +
          "' class='emot-class' Onclick='addemot(\"" +
          imglist[b] +
          "\")'>";
        $("#GhjSzd").append(biaoqing);
      }
      $("#GhjSzd").append(
        '<br><font id="clj">点就看代码</font> · <font id="fcjbz" class="firstfloorlink">粉橙渐变字代码</font> · <font id="hjjbz" class="heijin">黑金渐变字代码</font> · <font id="jgg">给楼内加公告</font> · <font id="wbk">文本框代码</font> · <font id="aaa">啊×n</font>'
      );
      $("#clj").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() +
            '<a href="超链接" target="_blank">点我就看</a>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#fcjbz").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() + '<font class="firstfloorlink">文字</font>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#hjjbz").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() + '<font class="heijin">文字</font>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#jgg").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() +
            '<scri'+'pt>Ghj_call_board="文字或图片代码"</sc'+'ript>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#wbk").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() +
            '<textarea class="form-control">文字或代码</textarea>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#aaa").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() +
            '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'
        );
        $(".am-tabs-bd").hide();
      });
      $(".am-tabs-bd").show();
    });
});
