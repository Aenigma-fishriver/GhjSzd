$("body").prepend("<div style='top:0px;left:0px;position: fixed;width:100%;height:100%;-webkit-pointer-events: none;-moz-pointer-events: none;-ms-pointer-events: none;-o-pointer-events: none;pointer-events: none;'><div id='shimeji' draggable='true' style='pointer-events:auto;position: absolute;cursor:move ;top:100px;left:90px;width:64px;height:64px;background-image:url(https://www.yeallye.com/shimeji/img/shime1.png);background-size:100%;z-index:999999999999;'></div></div>");
var dh = null;
var dhtimer = null;
var timer = null;
var movetimer = null;

function changeshimeji(a,rnum="0") {
  if (a == "1") {
    //鍋氫釜闅忔満鏁扮帺
    if (rnum == 1) {
      $('#shimeji').css({
        "background-image": "url(https://www.yeallye.com/shimeji/img/shime2.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime3.png)"
        });
      }, 300);
    } else {
      $('#shimeji').css({
        "background-image": "url(https://www.yeallye.com/shimeji/img/shime20.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime21.png)"
        });
      }, 300);
    }
  } else if (a == "2") {
    $('#shimeji').css({
      "background-image": "url(https://www.yeallye.com/shimeji/img/shime12.png)"
    });
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://www.yeallye.com/shimeji/img/shime13.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime14.png)"
        });
      }, 300);
    }, 300);
  } else if (a == "3") {
    $('#shimeji').css({
      "background-image": "url(https://www.yeallye.com/shimeji/img/shime23.png)"
    });
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://www.yeallye.com/shimeji/img/shime24.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime25.png)"
        });
      }, 300);
    }, 300);
  } else if (a == "4") {
    //濂藉儚鏄惉浠€涔堜笢瑗�
    $('#shimeji').css({
      "background-image": "url(https://www.yeallye.com/shimeji/img/shime39.png)"
    });
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://www.yeallye.com/shimeji/img/shime40.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime41.png)"
        });
      }, 300);
    }, 300);
  } else if (a == "5") {
    //鎯冲康鐢佃剳锛岄渶瑕乮nterview璋冨埌3000
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://www.yeallye.com/shimeji/img/shime27.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime28.png)"
        });
        dhtimer = setTimeout(function() {
          $('#shimeji').css({
            "background-image": "url(https://www.yeallye.com/shimeji/img/shime29.png)"
          });
        }, 300);
      }, 600);
    }, 1000);
  } else if (a == "6") {
    //鑸炶箞
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://www.yeallye.com/shimeji/img/shime5.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime6.png)"
        });
      }, 300);
    }, 200);
  }
}
/*
绉诲姩鍑芥暟
*/


function smjmove() {
  clearTimeout(movetimer);
  var rnum0 = Math.round(Math.random()); //闅忔満鏁�0鎴�1
  if (rnum0 == 0) {
    var yemotion = Math.floor(Math.random() * (6 - 4 + 1) + 4);
    var timedh = 900;
    if (yemotion == 5) {
      timedh = 3000;
    } else if (yemotion == 6) {
      timedh = 900;
    }
    // 鎵ц6娆″悗缁撴潫
    var timesRun = 0;
    dh = setInterval(function() {
      changeshimeji(yemotion)
      timesRun += 1;
      if (timesRun === 6) {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      }
    }, timedh);
  } else {

    var faHeigt = $('#shimeji').parent().height() - 64;
    var faWidth = $('#shimeji').parent().width() - 64;
    var yeY = $('#shimeji').position().top;
    var yeX = $('#shimeji').position().left;
    var rnum = Math.round(Math.random()); //闅忔満鏁�

    //鍦ㄥ湴闈㈠垯鍚戝乏璧版垨鑰呭悜涓婅蛋鎴栬€呮渶鍚庡潗鍦ㄥ湴涓�
    if (faHeigt - yeY <= 70 && yeX >= 200) {
      //鍚戝乏璧�
      changeshimeji(1,rnum)
      dh = setInterval("changeshimeji(1,"+rnum+")", 600, "linear");
      $('#shimeji').animate({
        left: "-=" + 200
      }, 6000, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY <= 70 && yeX <= 0) {
      //鍚戜笂璧�
      changeshimeji(2)
      dh = setInterval("changeshimeji(2)", 900, "linear");
      var movey = 200 < yeY ? 200 : yeY;
      $('#shimeji').animate({
        top: "-=" + movey
      }, movey * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY <= 70) {
      changeshimeji(1,rnum)
      var move_x = yeX;
      dh = setInterval("changeshimeji(1,"+rnum+")", 600, "linear");
      $('#shimeji').animate({
        left: "-=" + yeX
      }, yeX * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime26.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY >= 70 && yeX > 0 && yeY > 0) {
      //鏈夐珮搴︿笖涓嶅湪搴曢儴/椤堕儴锛屽垯璧板埌鏈€宸�
      var move_x = yeX;
      changeshimeji(1,rnum)
      dh = setInterval("changeshimeji(1,"+rnum+")", 600);
      $('#shimeji').animate({
        left: "-=" + yeX
      }, yeX * 60, "linear", function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime26.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY >= 70 && yeX == 0 && yeY > 0 && rnum == 0) {
      //宸茬粡璧板埌鏈€宸︼紝涓斾笉鍦ㄩ《閮ㄦ垨鑰呭簳閮紝闅忔満鏁板線涓婃垨鑰呭線涓�
      //鍚戜笂璧�
      changeshimeji(2)
      var move_x = yeX;
      dh = setInterval("changeshimeji(2)", 900, "linear");
      var movey = 200 < yeY ? 200 : yeY;
      $('#shimeji').animate({
        top: "-=" + movey
      }, movey * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY >= 70 && yeX == 0 && yeY > 0 && rnum == 1) {
      //宸茬粡璧板埌鏈€宸︼紝涓斾笉鍦ㄩ《閮ㄦ垨鑰呭簳閮紝闅忔満鏁板線涓婃垨鑰呭線涓�
      //鍚戜笅璧�
      changeshimeji(2)
      var move_x = yeX;
      dh = setInterval("changeshimeji(2)", 900, "linear");
      var movey = 200 < faHeigt - yeY ? 200 : faHeigt - yeY;
      $('#shimeji').animate({
        top: "+=" + movey
      }, movey * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (yeY == 0 && yeX == 0) {
      //鍦ㄥ乏涓婅锛屽垯鍚戜笅鐖垨鑰呭悜鍙崇埇
      if (rnum == 1) {
        //鍚戝彸
        changeshimeji(3)
        dh = setInterval("changeshimeji(3)", 900);
        var movey = 200 < faWidth - yeX ? 200 : faWidth - yeX;
        $('#shimeji').animate({
          left: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      } else {
        //鍚戜笅璧�
        changeshimeji(2)
        dh = setInterval("changeshimeji(2)", 900, "linear");
        var movey = 200 < faHeigt - yeY ? 200 : faHeigt - yeY;
        $('#shimeji').animate({
          top: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      }
    } else if (yeY == 0 && yeX > 0) {
      //鍦ㄦ渶椤讹紝鍒欏悜宸︾埇鎴栬€呭悜鍙崇埇
      //鍒ゆ柇yeX rnum
      changeshimeji(3)
      dh = setInterval("changeshimeji(3)", 900, "linear");
      //濡傛灉涓嶅湪鍙充笂瑙掞紝鍒欓殢鏈哄悜宸﹀悜鍙崇埇
      if (faWidth - yeX >= 5 && rnum == 1) {
        //鍚戝彸
        var movey = 200 < faWidth - yeX ? 200 : faWidth - yeX;
        $('#shimeji').animate({
          left: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      } else {
        //鍚戝乏
        var movey = 200 < yeX ? 200 : yeX;
        $('#shimeji').animate({
          left: "-=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      }

    }
  }
}



//闄嶈惤
function jiangluo() {
  $('#shimeji').css({
    "background-image": "url(https://www.yeallye.com/shimeji/img/shime4.png)"
  });
  var nowY = $('#shimeji').position().top;
  var faWidth = $('#shimeji').parent().height() - 64;
  var yyy = faWidth - nowY;
  $('#shimeji').animate({
    top: "+=" + yyy
  }, yyy * 20, function() {
    $('#shimeji').css({
      "background-image": "url(https://www.yeallye.com/shimeji/img/shime18.png)"
    });
    timer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://www.yeallye.com/shimeji/img/shime19.png)"
      });
      timer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      }, 1000)
    }, 700)

  });
}
smjmove();

$.fn.extend({
  dragging: function(data) {
    var $this = $(this);
    var xPage;
    var yPage;
    var X; //
    var Y; //
    var xRand = 0; //
    var yRand = 0; //
    var father = $this.parent();
    var defaults = {
      move: 'both',
      randomPosition: true,
      hander: 1
    }
    var opt = $.extend({}, defaults, data);
    var movePosition = opt.move;
    var random = opt.randomPosition;

    var hander = opt.hander;

    if (hander == 1) {
      hander = $this;
    } else {
      hander = $this.find(opt.hander);
    }


    //---鍒濆鍖�
    father.css({
      "position": "fixed",
      "overflow": "hidden"
    });
    hander.css({
      "cursor": "move"
    });

    var faWidth = father.width();
    var faHeight = father.height();
    var thisWidth = $this.width() + parseInt($this.css('padding-left')) + parseInt($this.css('padding-right'));
    var thisHeight = $this.height() + parseInt($this.css('padding-top')) + parseInt($this.css('padding-bottom'));

    var mDown = false; //
    var positionX;
    var positionY;
    var moveX;
    var moveY;

    if (random) {
      $thisRandom();
    }

    function $thisRandom() { //闅忔満鍑芥暟
      $this.each(function(index) {
        var randY = parseInt(Math.random() * (faHeight - thisHeight)); ///
        var randX = parseInt(Math.random() * (faWidth - thisWidth)); ///
        if (movePosition.toLowerCase() == 'x') {
          $(this).css({
            left: randX
          });
        } else if (movePosition.toLowerCase() == 'y') {
          $(this).css({
            top: randY
          });
        } else if (movePosition.toLowerCase() == 'both') {
          $(this).css({
            top: randY,
            left: randX
          });
        }

      });
    }
    $this.on("touchstart", function(e) {
      if ($this.is(":animated")) {
        $this.stop()
      };
      clearTimeout(timer);
      clearTimeout(dhtimer);
      clearInterval(dh);
      clearTimeout(movetimer);
      father.children().css({
        "zIndex": "0"
      });
      $this.css({
        "zIndex": "99"
      });
      mDown = true;
      X = e.originalEvent.changedTouches[0].pageX;
      Y = e.originalEvent.changedTouches[0].pageY;
      positionX = $this.position().left;
      positionY = $this.position().top;
      return false;
    });
    //!!!!!!!!
    $this.mousedown(function(e) {
      if ($this.is(":animated")) {
        $this.stop()
      };
      clearTimeout(timer);
      clearTimeout(dhtimer);
      clearInterval(dh);
      clearTimeout(movetimer);
      father.children().css({
        "zIndex": "0"
      });
      $this.css({
        "zIndex": "1"
      });
      mDown = true;
      X = e.pageX;
      Y = e.pageY;
      positionX = $this.position().left;
      positionY = $this.position().top;
      return false;
    });
    $this.on("touchend", function(e) {
      var rnum = Math.round(Math.random());
      if(rnum==0){
      $this.css({
        "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
      });
      mDown = false;
      jiangluo();}else{
        $this.css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
        });
        mDown = false;
        movetimer = setTimeout("smjmove()", 5000)
      }
    });
    $this.mouseup(function(e) {
      var rnum = Math.round(Math.random());
      if(rnum==0){
      $this.css({
        "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
      });
      mDown = false;
      jiangluo();}else{
        $this.css({
          "background-image": "url(https://www.yeallye.com/shimeji/img/shime1.png)"
        });
        mDown = false;
        movetimer = setTimeout("smjmove()", 5000)
      }
    });
    $this.on("touchmove", function(e) {
      xPage = e.originalEvent.changedTouches[0].pageX; //--
      moveX = positionX + xPage - X;
      selX = xPage - X;

      yPage = e.originalEvent.changedTouches[0].pageY; //--
      moveY = positionY + yPage - Y;

      function thisXMove() { //x杞寸Щ鍔�
        if (mDown == true) {
          $this.css({
            "left": moveX
          });
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }
        return moveX;
      }

      function thisYMove() { //y杞寸Щ鍔�
        if (mDown == true) {
          $this.css({
            "top": moveY
          });
        } else {
          return;
        }
        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
        return moveY;
      }

      function thisAllMove() { //鍏ㄩ儴绉诲姩
        if (mDown == true) {
          $this.css({
            "left": moveX,
            "top": moveY
          });
          if (selX > 0) {
            $this.css({
              "background-image": "url(https://www.yeallye.com/shimeji/img/shime9.png)"
            });
          } else {
            $this.css({
              "background-image": "url(https://www.yeallye.com/shimeji/img/shime10.png)"
            });
          }
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }

        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
      }
      if (movePosition.toLowerCase() == "x") {
        thisXMove();
      } else if (movePosition.toLowerCase() == "y") {
        thisYMove();
      } else if (movePosition.toLowerCase() == 'both') {
        thisAllMove();
      }
    });
    $this.mousemove(function(e) {
      xPage = e.pageX; //--
      moveX = positionX + xPage - X;
      selX = xPage - X;
      $("#move1").html(positionX);
      $("#move2").html(xPage - X);
      $("#move3").html(X);

      yPage = e.pageY; //--
      moveY = positionY + yPage - Y;

      function thisXMove() { //x杞寸Щ鍔�
        if (mDown == true) {
          $this.css({
            "left": moveX
          });
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }
        return moveX;
      }

      function thisYMove() { //y杞寸Щ鍔�
        if (mDown == true) {
          $this.css({
            "top": moveY
          });
        } else {
          return;
        }
        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
        return moveY;
      }

      function thisAllMove() { //鍏ㄩ儴绉诲姩
        if (mDown == true) {
          $this.css({
            "left": moveX,
            "top": moveY
          });
          if (selX > 0) {
            $this.css({
              "background-image": "url(https://www.yeallye.com/shimeji/img/shime9.png)"
            });
          } else {
            $this.css({
              "background-image": "url(https://www.yeallye.com/shimeji/img/shime10.png)"
            });
          }
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }

        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
      }
      if (movePosition.toLowerCase() == "x") {
        thisXMove();
      } else if (movePosition.toLowerCase() == "y") {
        thisYMove();
      } else if (movePosition.toLowerCase() == 'both') {
        thisAllMove();
      }
    });
  }
});
$(function() {
  $('#shimeji').each(function() {
    $(this).dragging({
      move: 'both',
      randomPosition: false
    });
  });

});
