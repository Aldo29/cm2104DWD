$(function(){
	// usual main starting point when web page loads

	// simple CSS class switcher
	// find all divs
	// bind to click events
	// alter the CSS of the specific clicked div element
	$("div").click(function(){
		// $(this) is a shortcut for the element we just selected
		// using $("div")
		$(this).animate({opacity: 0.25},1000,function(){
			$(this).css("opacity", 1);
		});
		$(this).toggleClass(function(){
			if ($(this).hasClass("red")) {
				return "red blue";
			}
			else if ($(this).hasClass("blue")) {
				return "blue green";
			}
			else if ($(this).hasClass("green")) {
				return "green red";
			}
		});

	});

});
