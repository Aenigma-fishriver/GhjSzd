//缩略icon
var linkObject = document.createElement("link");
linkObject.rel = "shortcut icon";
linkObject.href = "https://i.loli.net/2020/01/06/AjNsqOp9eEVR2k6.png";
document.getElementsByTagName("head")[0].appendChild(linkObject);

//鼠标点击效果
(function () {
    var coreSocialistValues = ["🌸", "🐰", "💚", "💛", "🧡", "❤️"];
    var index = Math.floor(Math.random() * coreSocialistValues.length);
    document.body.addEventListener("click", function (e) {
        if (e.target.tagName == "A") {
            return;
        }
        var x = e.pageX,
            y = e.pageY,
            span = document.createElement("span");
        span.innerHTML = coreSocialistValues[index];
        index = (index + 1) % coreSocialistValues.length;
        span.style.cssText = [
            "z-index: 9999999; position: absolute; font-weight: bold; color: #ff6651; top: ",
            y - 20,
            "px; left: ",
            x,
            "px;"
        ].join("");
        document.body.appendChild(span);
        animate(span);
    });

    function animate(el) {
        var i = 0,
            top = parseInt(el.style.top),
            id = setInterval(frame, 16.7);

        function frame() {
            if (i > 180) {
                clearInterval(id);
                el.parentNode.removeChild(el);
            } else {
                i += 2;
                el.style.top = top - i + "px";
                el.style.opacity = (180 - i) / 180;
            }
        }
    }
})();
