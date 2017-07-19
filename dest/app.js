$(document).ready(function() {
	
	$('#sliderIconos').slick({
		mobileFirst: true,	
		responsive: [
			{
				breakpoint: 0,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: "unslick"
			}
		]
	});

	$('#sliderEquipo').slick({
		mobileFirst: true,
		prevArrow: '#prevArrow',
		nextArrow: '#nextArrow',
		responsive: [
			{
				breakpoint: 0,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 1269,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					centerMode: true,
					autoplay: true
				}
			},
			{
				breakpoint: 1699,
				settings: {
					slidesToShow: 6,
					autoplay: true
				}
			}
		]
	});
});
