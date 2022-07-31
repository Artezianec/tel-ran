$(document).ready(function(){

	$('.video__player-play').click(function(event){
		event.preventDefault();
		let video_player = '<iframe width="100%" height="100%" src="'+$('.video-bg__box').attr('data-youtube-url')+'?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		$(".video-bg__box").append(video_player);
		$('.video-bg').addClass("active");
		
	});
	
	$('.video-bg__cancel').click(function(event){
		if($('.video-bg').hasClass('active')){
			$('.video-bg').removeClass("active");
		
			setTimeout(function(){
				$(".video-bg__box").html("");
			}, 300);
		}
	});

	$(document).mousedown(function (e){
		if (!$(".video-bg__box").is(e.target) && $(".video-bg__box").has(e.target).length === 0 && $('.video-bg').hasClass('active')) {
			$('.video-bg').removeClass("active");
			
			setTimeout(function(){
				$(".video-bg__box").html("");
			}, 300);
		}
	});
	
	$(".arrow img").click(function() {
		
		$('html, body').animate({
			scrollTop: $(".content").offset().top - 40
		}, 1000);
		
	});
	
});


