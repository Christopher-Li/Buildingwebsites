var Pic1Div = document.getElementById("pic1");
var Pic2Div = document.getElementById("pic2");
var Pic3Div = document.getElementById("pic3");
var Pic4Div = document.getElementById("pic4");
var Pic1DescriptionDiv = document.getElementById("pic1description");
var Pic2DescriptionDiv = document.getElementById("pic2description");
var Pic3DescriptionDiv = document.getElementById("pic3description");
var Pic4DescriptionDiv = document.getElementById("pic4description");


$(document).ready(function(){
	$(".pic1").hover(function(){
		$(".pic1description").animate({left: "0px"}, 500);
		$(".pic1description").css("left","0px");
	}, function(){
		$(".pic1description").animate({left: "100%"}, 500);
		$(".pic1description").css("left","100%");
	});
});

$('.container').animate({ right: 0 }, 5000)