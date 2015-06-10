$(document).ready(function() {
	
	$('.mailing-list-input').focus(function() {
		$('.mailing-list-input-container').addClass('has-submit-button');
	});
	
	$('#imprint-link').click(function() {
		$('#imprint').addClass('is-visible');
		$('html, body').animate({
        scrollTop: $("#imprint").offset().top
    }, 500);
		$(this).delay(500).addClass('is-hidden');
	});
});
