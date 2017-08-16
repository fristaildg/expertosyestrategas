$(document).ready(function() {

	var videoModal = $('.video-modal').remodal();

	setTimeout(function() {
		videoModal.open();
	}, 1500);

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
					slidesToShow: 6
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

	// Menu móvil
	var hamb = $('.hamburger');
	var menu = $('#menu-desktop');
	var menuItem = menu.find($('li > a'));

	hamb.click(function() {

		if($(window).width() < 768) {
			menu.toggleClass('abierto');
			$(this).toggleClass('abierto');
			$('body').toggleClass('menu-abierto');
		}
	});

	menuItem.click(function() {

		if($(window).width() < 768) {
			menu.removeClass('abierto');
			hamb.removeClass('abierto');
			$('body').removeClass('menu-abierto');
		}		
	});

	// Menu menu-desktop
	var nav = $('.nav');
	$(document).on('scroll', function() {
		if($(document).scrollTop() > 60) {
			nav.addClass('scrolleado');
		} else {
			nav.removeClass('scrolleado');
		};

		if($(document).scrollTop() > 200) {
			nav.removeClass('scrolleado');
			nav.addClass('sticky');
		} else {
			nav.removeClass('sticky');
		};
	})

	// Fotos servicios
	var servicio = $('.servicio');
	servicio.click(function() {
		$(this).toggleClass('clickeado');
	});	

	onYouTubeIframeAPIReady();	
});

// Video Player
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: 'bu_3NpkMoMQ',
		playerVars: {
			'rel': 0,
			'showinfo': 0,
			'controls': 0,
			'modestbranding': 0
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	console.log(event);
}

function onPlayerStateChange(event) {
	console.log(event);
}
