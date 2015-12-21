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