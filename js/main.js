// Typed script for intro -----------------------------------------------------------------------------------------------------//
var options = {
	strings: ["Srinivas Buddha.","a UI Developer.", "a UX &amp; UI Designer.", "a nature enthusiast.", "and a Photographer."],
	typeSpeed: 60,
	loop: true,
	backSpeed: 20,
	backDelay: 1500
  }
var typed = new Typed(".typed", options);

// Skills bars animation -------------------------------------------------------------------------------------------------------//
$(document).ready(function () {
	function triggerAnimate(element) {
		element.find('.skillbar-bar').animate({
			width: $(element).attr('data-percent')
		}, 4000);
	}

	function revertAnimate(element) {
		element.find('.skillbar-bar').css('width', '0%');
	}

	var $animation_elements = $('.skillbar');
	var $window = $(window);

	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_elements, function () {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				triggerAnimate($element);
			} else {
				revertAnimate($element);
			}
		});
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

});