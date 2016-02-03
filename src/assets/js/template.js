jQuery(document).ready(function($) {
	if (($('body').width() < 1200)&&($('body').width() > 768)) {
		$(".news__grid .grid__item:nth-child(4n+1)").addClass('clear');
		console.log('1');
	}
	else if ($('body').width() < 768) {
		$(".news__grid .grid__item:nth-child(2n+1)").addClass('clear');
		console.log('2');
	} 
	else {
		$(".news__grid .grid__item:nth-child(3n+1)").addClass('clear');
		console.log('3');
	};
});
$( window ).resize(function() {
	$(".news__grid .grid__item").removeClass('clear');
 	if (($('body').width() < 1200)&&($('body').width() > 768)) {
		$(".news__grid .grid__item:nth-child(4n+1)").addClass('clear');
		console.log('1');
	}
	else if ($('body').width() < 768) {
		$(".news__grid .grid__item:nth-child(2n+1)").addClass('clear');
		console.log('2');
	} 
	else {
		$(".news__grid .grid__item:nth-child(3n+1)").addClass('clear');
		console.log('3');
	};
});

(function($){
	$(window).load(function(){
		
		$(".table-working_hours").mCustomScrollbar({
			axis:"x",
			scrollButtons:{enable:true},
			theme:"3d",
			scrollbarPosition:"outside",
			snapAmount:120,
			snapOffset:40
		});
		// $(".table-working_hours").mCustomScrollbar({
		// 	scrollButtons:{enable:true,scrollType:"stepped"},
		// 	keyboard:{scrollType:"stepped"},
		// 	mouseWheel:{scrollAmount:188},
		// 	theme:"rounded-dark",
		// 	autoExpandScrollbar:true,
		// 	snapAmount:188,
		// 	snapOffset:65
		// });
		
		
	});
})(jQuery);
