/* $(".container .nav .icon").on("click", function() {
  console.log("a");
  $(".overlay").fadeIn("fast", function() {
    $(".overlay").show("fast");
  });
  $(".no-content li").animate(
    {
      fontSize: "1.8rem"
    },
    100
  );
});

$(".close").on("click", function() {
  console.log("b");
  $(".overlay").fadeOut("fast", function() {
    $(".overlay").hide();
  });
  $(".no-content li").animate({
    fontSize: "80px"
  });
});
 */
var nowWinSize = 0;
var nowIndex = 0;

$(".icon").click(function() {
  $(".overlay").addClass("active");
  console.log("a");
});

$(".close").click(function() {
  $(".overlay").removeClass("active");
});

nagetWinSizeme();
function nagetWinSizeme() {
  nowWinSize = $(document).width() * 0.7;
}
$(".hero-content").width(nowWinSize * 5);

$(".hero-btn").click(function() {
  console.log($(".hero-content").length);
  nowIndex++;

  if (nowIndex >= $(".hero ul li").length) {
    nowIndex = 0;
    $(".hero-content").css({
      transform: "translateX(" + -nowWinSize * nowIndex + "px)",
      transition:'no'
    });
  } else {
    $(".hero-content").css({
      transform: "translateX(" + -nowWinSize * nowIndex + "px)",
      transition: "all 0.3s ease"
    });
  }
});
