$.fn.extend({
  slider: function(obj) {
    /* 函数构建 */
    var defaultSet = {
      timer: 1000,
      pic: []
    };
    var newSet = $.extend({}, defaultSet, obj);

    /* 拼接DOM结构 */
    var content = $('<div class="slider"></div>');
    var imgBar =
      '<div><div class="slider-panner sp-1 active">' +
      '<div><img src="' +
      newSet.pic[0] +
      '"/></div></div>' +
      '<div class="slider-panner sp-2 active">' +
      '<div><img src="' +
      newSet.pic[1] +
      '"/></div></div>' +
      '<div class="slider-panner sp-3 active">' +
      '<div><img src="' +
      newSet.pic[2] +
      '"/></div></div>';
    var btnBar =
      ' <div class="list-btn"><ul>' +
      '<li class="active"></li><li></li><li></li></ul></div></div>';
    content.html(imgBar + btnBar);
    $(this).append(content);

    /* script处理 */
    var play = null;
    var nowIndex = 0;

    autoNext();
    function autoNext() {
      play = setInterval(function() {
        nowIndex++;
        if (nowIndex >= $(".list-btn li").length) {
          nowIndex = 0;
        }
        $($(".list-btn li").eq(nowIndex)).triggerHandler("mouseover");
      }, newSet.timer);
    }

    //鼠标移入停止播放
    $(".slider").on("mouseover", function() {
      // console.log("mouseover");
      clearInterval(play);
    });

    //鼠标移出播放
    $(".slider").on("mouseout", function() {
      // console.log("mouseout");
      autoNext();
    });

    //小条条
    nextImg();
    //切换图片
    function nextImg() {
      $(".list-btn li").on("mouseover", function() {
        $(this)
          .add($(".slider-panner").eq($(this).index()))
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
    }
  }
});
