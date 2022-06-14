$(function(){
	var count = $(".detail_pic_slide li").length;
	var current = 1;
	var next = 2;
	var interval = 3000;
	var duration = 500;
	var timer;
	$(".detail_pic_slide li:not(:first-child)").hide();
	timer = setInterval(slideTimer, interval);
	function slideTimer(){
			$(".detail_pic_slide li:nth-child(+"+current+")").fadeOut(duration);
			$(".detail_pic_slide li:nth-child(+"+next+")").fadeIn(duration);
			current = next;
			next = ++next;
			if (next>count) {
					next = 1;
			}
			$(".detail_pic_button li a").removeClass("target");
			$(".detail_pic_button li:nth-child("+ current +") a").addClass("target");
	}
			$(".detail_pic_button li a").click(function(){
				next = $(this).html();
					clearInterval(timer);
					timer = setInterval(slideTimer, interval);
					slideTimer();
		return false;
	});
});
