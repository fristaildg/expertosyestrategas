$(document).ready(function() {

	// Configuración de los sliders
	
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

	// Click en los miembros del equipo
	$('.equipo').click(function() {
		var self = $(this);
		var descripcion = self.find($('.descripcion'));

		if($(window).width() < 1024) {
			self.toggleClass('clickeado');
			descripcion.fadeToggle('fast');					
		}
	});

	$('.equipo').find($('a')).click(function(event) {
		event.stopPropagation();
		// return false;
	});

	$(document).on('closing', '.remodal', function() {

		if($(window).width() < 1024) {
			$('.equipo').removeClass('clickeado');
			$('.equipo').find($('.descripcion')).fadeOut('fast');			
		}
	});
});
