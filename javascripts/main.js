// $(function () {
// 	$('.speaker').on('click', function () {
// 		if($(this).siblings('.submission').hasClass('hidden')) {

// 		$('div').closest('.submission').addClass('hidden');
// 		$(this).siblings('.submission').toggleClass('hidden');

// 		} else {
// 			$(this).siblings('.submission').toggleClass('hidden');
// 		}
// 	});
// });

$(function () {
	$('.speaker').on('click', function () {
		if($(this).siblings('.submission').hasClass('hidden')) {

			$('.person').closest('.submission').addClass('hidden');
			$(this).siblings('.submission').toggleClass('hidden');

		} else {
			$(this).siblings('.submission').toggleClass('hidden');
		}
	});
});