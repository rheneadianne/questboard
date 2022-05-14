// hello present tianne, past tianne here
// im keeping this here to document how i used to code jquery. 
// so one day maybe i can look back and see how far my abilities have gone :)
// secondgo.js was made less than a day after this. im just very proud

var unclickedcolours = "color:black;background-color:#ffe4c7; box-shadow: 0 0 0 none;";
var unclickedlinene = "color:black;background-color:#cee8fc; box-shadow: 0 0 0 none;";
var unclickeddone = "color:black;background-color:#c49675; box-shadow: 0 0 0 none;";
var clickedcolours = "color:#4F0008;background-color:#DF9F0A; box-shadow: 0 0 2px black;";

$(".one").click(function () {
    $(".landing").hide();
    $(".big-one").show();
    $(".big-two").hide();
    $(".big-three").hide();
    $(".big-four").hide();
    $("big-five").hide();
    $(".one").attr("style", clickedcolours);
    $(".two").attr("style", unclickedcolours);
    $(".three").attr("style", unclickedcolours)
    $(".four").attr("style", unclickedlinene)
    $(".five").attr("style", unclickedcolours);
});

$(".two").click(function () {
    $(".landing").hide();
    $(".big-one").hide();
    $(".big-two").show();
    $(".big-three").hide();
    $(".big-four").hide();
    $("big-five").hide();
    $(".one").attr("style", unclickeddone);
    $(".two").attr("style", clickedcolours);
    $(".three").attr("style", unclickedcolours);
    $(".four").attr("style", unclickedlinene);
    $(".five").attr("style", unclickedcolours);
});

$(".three").click(function () {
    $(".landing").hide();
    $(".big-one").hide();
    $(".big-two").hide();
    $(".big-three").show();
    $(".big-four").hide();
    $("big-five").hide();
    $(".one").attr("style", unclickeddone);
    $(".two").attr("style", unclickedcolours);
    $(".three").attr("style", clickedcolours);
    $(".four").attr("style", unclickedlinene);
    $(".five").attr("style", unclickedcolours);
});

$(".four").click(function () {
    $(".landing").hide();
    $(".big-one").hide();
    $(".big-two").hide();
    $(".big-three").hide();
    $(".big-four").show();
    $("big-five").hide();
    $(".one").attr("style", unclickeddone);
    $(".two").attr("style", unclickedcolours);
    $(".three").attr("style", unclickedcolours);
    $(".four").attr("style", clickedcolours);
    $(".five").attr("style", unclickedcolours);
});

$(".five").click(function () {
    $(".landing").hide();
    $(".big-one").hide();
    $(".big-two").hide();
    $(".big-three").hide();
    $(".big-four").hide();
    $(".big-five").show();
    $(".one").attr("style", unclickeddone)
    $(".two").attr("style", unclickedcolours)
    $(".three").attr("style", unclickedcolours)
    $(".four").attr("style", unclickedlinene)
    $(".five").attr("style", clickedcolours)
});
