const unclickedcolours = "color:black;background-color:#ffe4c7; box-shadow: 0 0 0 none;";
const unclickedlinene = "color:black;background-color:#cee8fc; box-shadow: 0 0 0 none;";
const unclickeddone = "color:black;background-color:#c49675; box-shadow: 0 0 0 none;";
const clickedcolours = "color:#4F0008;background-color:#DF9F0A; box-shadow: 0 0 2px black;";


$(".one").click(function () {
    $( ".quest-big article" ).not( ".big-one" ).hide();
    $( ".big-one" ).show();
    $(".one").attr("style", clickedcolours);
    $(".side article").not(".one").attr("style", unclickedcolours)
    $(".linene-q").attr("style", unclickedlinene)
});

$(".two").click(function () {
    $( ".quest-big article" ).not( ".big-two" ).hide();
    $( ".big-two" ).show();
    $(".two").attr("style", clickedcolours);
    $(".side article").not(".two").attr("style", unclickedcolours)
    $(".linene-q").attr("style", unclickedlinene)
});

$(".three").click(function () {
    $( ".quest-big article" ).not( ".big-three" ).hide();
    $( ".big-three" ).show();
    $(".three").attr("style", clickedcolours);
    $(".side article").not(".three").attr("style", unclickedcolours)
    $(".linene-q").attr("style", unclickedlinene)
});

$(".four").click(function () {
    $( ".quest-big article" ).not( ".big-four" ).hide();
    $( ".big-four" ).show();
    $(".four").attr("style", clickedcolours);
    $(".side article").not(".four").attr("style", unclickedcolours)
});

$(".five").click(function () {
    $( ".quest-big article" ).not( ".big-five" ).hide();
    $( ".big-five" ).show();
    $(".five").attr("style", clickedcolours);
    $(".side article").not(".five").attr("style", unclickedcolours)
    $(".linene-q").attr("style", unclickedlinene)
});

$(".six").click(function () {
    $( ".quest-big article" ).not( ".big-six" ).hide();
    $( ".big-six" ).show();
    $(".six").attr("style", clickedcolours);
    $(".side article").not(".six").attr("style", unclickedcolours)
    $(".linene-q").attr("style", unclickedlinene)
});

$(".seven").click(function () {
    $( ".quest-big article" ).not( ".big-seven" ).hide();
    $( ".big-seven" ).show();
    $(".seven").attr("style", clickedcolours);
    $(".side article").not(".seven").attr("style", unclickedcolours)
    $(".linene-q").attr("style", unclickedlinene)
});