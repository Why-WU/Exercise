$(".container .nav .icon").on("click", function() {
  console.log("a");
  $(".overlay").fadeIn("fast", function() {
    $(".overlay").show();
  });
  $(".no-content").animate(
    {
      fontSize: "40px"
    },
    100
  );
});

$(".close").on("click", function() {
  console.log("b");
  $(".overlay").fadeOut("fast", function() {
    $(".overlay").hide();
  });
  $(".no-content").animate({
    fontSize: "80px"
  });
});
