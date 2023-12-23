$("h1").css("color", "red");

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    console.log(event.key);
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(event) {
    $("h1").css("color", "green");
});

$("h1").on("click", function(event) {
    $("h1").css("color", "green");
});

$("button").on("click", function() {
   // $("h1").fadeToggle(); fadeIn, fadeOut
   // $("h1").slideToggle(); slideIn, slideOut
   $("h1").animate({opacity: 0.5});
});