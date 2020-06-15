$(document).ready(function(){
	$('.level-selection-tab li').click(function(e) {
		e.preventDefault();
		$('li').removeClass('level-selection-active');
		$(this).addClass('level-selection-active');
		var tab = $(this).attr('data-num');
		$('.level-selection-tab__box').not(tab).css({'display':'none'});
		$(tab).fadeIn(400);
	});
	$('.level-selection-tab li:first').click();
});
