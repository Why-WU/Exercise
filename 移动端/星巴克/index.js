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

$(".icon").click(function() {
  $(".overlay").addClass("active");
  console.log('a');
  
});

$(".close").click(function() {
  $(".overlay").removeClass("active");
});
