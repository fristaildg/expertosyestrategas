$('#sliderIconos').slick({
	mobileFirst: true,	
	responsive: [
		{
			breakpoint: 0,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 767,
			settings: "unslick"
		}
	]
});