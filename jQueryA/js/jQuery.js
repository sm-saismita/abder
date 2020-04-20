$(document).ready(function()

 


{
  $("#secret").hide();

$("#button1").click(function(){
  $("#secret").show(); });


$("p").css("font-size" , "23px" );

$("footer").html("<p>Come over here for an extra tip!</p>");

$("footer").mouseover(function(){
    $("footer p").html("Spread butter on two pieces of toast and heat in the oven to enjoy with your eggs! ");
});

$("footer").mouseleave(function() {
  $("footer p").html("Bon Apetit!");
});




});
