$("body").prepend("<div style='top:0px;left:0px;position: fixed;width:100%;height:100%;-webkit-pointer-events: none;-moz-pointer-events: none;-ms-pointer-events: none;-o-pointer-events: none;pointer-events: none;'><div id='shimeji' draggable='true' style='pointer-events:auto;position: absolute;cursor:move ;top:100px;left:90px;width:64px;height:64px;background-image:url(https://www.yeallye.com/shimeji/img/shime1.png);background-size:100%;z-index:999999999999;'></div></div>");
var dh = null;
var dhtimer = null;
var timer = null;
var movetimer = null;

function changeshimeji(a,rnum="0") {
  if (a == "1") {
    if (rnum == 1) {
      $('#shimeji').css({
        "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime2.png)" //叼烟走1
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime3.png)" //叼烟走2
        });
      }, 300);
    } else {
      $('#shimeji').css({
        "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime20.png)" //蜷腿趴1
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime21.png)" //蜷腿趴2
        });
      }, 300);
    }
  } else if (a == "2") {
    $('#shimeji').css({
      "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime12.png)" //甩手跑1
    });
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime13.png)" //甩手跑2
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime14.png)" //甩手跑3
        });
      }, 300);
    }, 300);
  } else if (a == "3") {
    $('#shimeji').css({
      "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime23.png)" //向上抱1
    });
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime24.png)" //向上抱2
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime25.png)" //向上抱3
        });
      }, 300);
    }, 300);
  } else if (a == "4") {
    $('#shimeji').css({
      "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime39.png)" //乖乖坐1
    });
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime40.png)" //乖乖坐2
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime41.png)" //乖乖坐3
        });
      }, 300);
    }, 300);
  } else if (a == "5") {
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime27.png)" //盘腿坐1
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime28.png)" //盘腿坐2
        });
        dhtimer = setTimeout(function() {
          $('#shimeji').css({
            "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime29.png)" //盘腿坐3
          });
        }, 300);
      }, 600);
    }, 1000);
  } else if (a == "6") {
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime5.png)" //站立左扭
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime6.png)" //站立右扭
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
  var rnum0 = Math.round(Math.random());
  if (rnum0 == 0) {
    var yemotion = Math.floor(Math.random() * (6 - 4 + 1) + 4);
    var timedh = 900;
    if (yemotion == 5) {
      timedh = 3000;
    } else if (yemotion == 6) {
      timedh = 900;
    }
    var timesRun = 0;
    dh = setInterval(function() {
      changeshimeji(yemotion)
      timesRun += 1;
      if (timesRun === 6) {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
        });
        movetimer = setTimeout("smjmove()", 5000)
      }
    }, timedh);
  } else {

    var faHeigt = $('#shimeji').parent().height() - 64;
    var faWidth = $('#shimeji').parent().width() - 64;
    var yeY = $('#shimeji').position().top;
    var yeX = $('#shimeji').position().left;
    var rnum = Math.round(Math.random());

    if (faHeigt - yeY <= 70 && yeX >= 200) {
      changeshimeji(1,rnum)
      dh = setInterval("changeshimeji(1,"+rnum+")", 600, "linear");
      $('#shimeji').animate({
        left: "-=" + 200
      }, 6000, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY <= 70 && yeX <= 0) {
      changeshimeji(2)
      dh = setInterval("changeshimeji(2)", 900, "linear");
      var movey = 200 < yeY ? 200 : yeY;
      $('#shimeji').animate({
        top: "-=" + movey
      }, movey * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
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
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime26.png)" //盘腿坐
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY >= 70 && yeX > 0 && yeY > 0) {
      var move_x = yeX;
      changeshimeji(1,rnum)
      dh = setInterval("changeshimeji(1,"+rnum+")", 600);
      $('#shimeji').animate({
        left: "-=" + yeX
      }, yeX * 60, "linear", function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime26.png)" //盘腿坐
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY >= 70 && yeX == 0 && yeY > 0 && rnum == 0) {
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
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY >= 70 && yeX == 0 && yeY > 0 && rnum == 1) {
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
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (yeY == 0 && yeX == 0) {
      if (rnum == 1) {
        changeshimeji(3)
        dh = setInterval("changeshimeji(3)", 900);
        var movey = 200 < faWidth - yeX ? 200 : faWidth - yeX;
        $('#shimeji').animate({
          left: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      } else {
        changeshimeji(2)
        dh = setInterval("changeshimeji(2)", 900, "linear");
        var movey = 200 < faHeigt - yeY ? 200 : faHeigt - yeY;
        $('#shimeji').animate({
          top: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      }
    } else if (yeY == 0 && yeX > 0) {
      changeshimeji(3)
      dh = setInterval("changeshimeji(3)", 900, "linear");
      if (faWidth - yeX >= 5 && rnum == 1) {
        var movey = 200 < faWidth - yeX ? 200 : faWidth - yeX;
        $('#shimeji').animate({
          left: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      } else {
        var movey = 200 < yeX ? 200 : yeX;
        $('#shimeji').animate({
          left: "-=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
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
    "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime4.png)" //掉下来
  });
  var nowY = $('#shimeji').position().top;
  var faWidth = $('#shimeji').parent().height() - 64;
  var yyy = faWidth - nowY;
  $('#shimeji').animate({
    top: "+=" + yyy
  }, yyy * 20, function() {
    $('#shimeji').css({
      "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime18.png)" //摔到地上
    });
    timer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime19.png)" //摔到地上爬起来一半
      });
      timer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
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
    var X; 
    var Y; 
    var xRand = 0; 
    var yRand = 0; 
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

    function $thisRandom() {
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
        "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
      });
      mDown = false;
      jiangluo();}else{
        $this.css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
        });
        mDown = false;
        movetimer = setTimeout("smjmove()", 5000)
      }
    });
    $this.mouseup(function(e) {
      var rnum = Math.round(Math.random());
      if(rnum==0){
      $this.css({
        "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
      });
      mDown = false;
      jiangluo();}else{
        $this.css({
          "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime1.png)" //分腿站立笑
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
              "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime9.png)" //空中向右拉
            });
          } else {
            $this.css({
              "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime10.png)" //空中向左拉
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
              "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime9.png)" //空中向右拉
            });
          } else {
            $this.css({
              "background-image": "url(https://raw.githubusercontent.com/Aenigma-fishriver/GhjSzd/master/image/shime10.png)" //空中向左拉
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
