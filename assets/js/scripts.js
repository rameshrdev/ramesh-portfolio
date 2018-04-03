/*
Theme Name: xPerson
Author: SketchThemes
Author URL: https://sketchthemes.com/
*/

/*
	= Preloader
	= Animated scrolling / Scroll Up
	= Full Screen Slider
	= Sticky Menu
	= Back To Top
	= Countup
	= Progress Bar
	= More skill
	= Shuffle
	= Magnific Popup
	= Vidio auto play
	= Fit Vids

*/

/*(function($){
	'use strict';

	
	$(window).ready(function() {
		$('#pre-status').fadeOut();
		$('#tt-preloader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {
		(function () {
			$('.mouse-icon').bind("click", function(e){
				$('html, body').stop().animate({
					scrollTop: $('#undefined-sticky-wrapper').offset().top
				}, 1000);
				e.preventDefault();
			});
		}());
		(function () {
			$('a[href*=\\#]:not([href=\\#])').bind("click", function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top
				}, 1000);
				e.preventDefault();
			});
		}());

		(function () {
			$(".tt-fullHeight").height($(window).height());

			$(window).resize(function(){
				$(".tt-fullHeight").height($(window).height());
			});
		}());

		(function () {
			$('.header').sticky({
				topSpacing: 0
			});

			$('body').scrollspy({
				target: '.navbar-custom',
				offset: 70
			})
		}());

	
		(function () {
			$('#menu .sub-menu').addClass('dropdown-menu');
			$('#menu .sub-menu').parent().append('<span class="has-dropdown-menu"><i class="fa fa-caret-down"></i></span>');
		}());

		
		(function () {
			var $grid = $('#grid');
			$grid.shuffle({
				itemSelector: '.portfolio-item'
			});
			
			$('#filter a').click(function (e) {
				e.preventDefault();
				// set active class
				$('#filter a').removeClass('active');
				$(this).addClass('active');
				// get group name from clicked item
				var groupName = $(this).attr('data-group');
				// reshuffle grid
				$grid.shuffle('shuffle', groupName );
			});
		}());

		
		(function () {
		  $('.image-link').magnificPopup({
			gallery: {
			  enabled: true
			},
			removalDelay: 300, // Delay in milliseconds before popup is removed
			mainClass: 'mfp-with-zoom', // this class is for CSS animation below
			type:'image'
		  });
		}());

		(function () {
			$('.popup-video').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-with-zoom',
				removalDelay: 300,
				preloader: false

			});
		}());

		
		(function () {
			$(".video-container").fitVids();
		}());

		// (function () {
		// /* Vimeo API: http://developer.vimeo.com/player/js-api 
		// 	var iframe = document.getElementById('nofocusvideo');
		// 	// $f == Froogaloop
		// 	var player = $f(iframe);
		// 	$('.modal').on('hidden.bs.modal', function () {
		// 	player.api('pause');
		// 	})
		// 	$('.modal').on('shown.bs.modal', function () {
		// 	player.api('play');
		// 	})
		// }());

		
		(function () {
			new WOW({
				mobile:  false
			}).init();
		}());

		// -------------------------------------------------------------
		// Gallery Post
		// -------------------------------------------------------------
		(function () {
			$(".skt-gallery-post").owlCarousel({
				loop: true,
				lazyLoad:true,
				items: 1,
				margin: 0,
				nav: false,
				dots: true,
				responsiveClass:true,
			});
		}());
	});

	// -------------------------------------------------------------
	// Back To Top
	// -------------------------------------------------------------
	(function () {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});
	}());

	// -------------------------------------------------------------
	// STELLAR FOR BACKGROUND SCROLLING
	// -------------------------------------------------------------
	$(window).load(function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		} else {
			$.stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

		$("#filter a[data-group=all]").trigger('click');

	});

})(jQuery);*/
$(document).ready( function() {
	
	$(window).scroll(function(){
		var docViewTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var skillOffsetFirst = $('.skill-progress:first').offset().top;
		skillOffsetFirst -= windowHeight;
		var skillOffsetLast = $('.skill-progress:last').offset().top;
		skillOffsetLast += $('.skill-progress:last').height();
		console.log(docViewTop);
		console.log($('.skill-progress:last').offset().top);
		
		$('.skill-progress').each(function(){
			var skillOffset = $(this).offset().top;
			skillOffset-=$(this).height();
			skillOffset-=windowHeight;
			if(docViewTop > skillOffset){
				var skillChild = $(this).find('.progress-bar');
				skillChild.css('width', skillChild.attr('aria-valuenow')+'%');
			}
	    });
		if(docViewTop<skillOffsetFirst || docViewTop>skillOffsetLast){
			$('.skill-progress .progress-bar').css('width', '0');
		}
	});
	
	
		$('#count-wrap-9').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				var $this = $('#timer-9');
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
				$(this).unbind('inview');
			}
		});
	});
	$(document).ready( function() {
		$('#count-wrap-10').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				var $this = $('#timer-10');
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
				$(this).unbind('inview');
			}
		});
	});
	$(document).ready( function() {
		$('#count-wrap-11').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				var $this = $('#timer-11');
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
				$(this).unbind('inview');
			}
		});
	});
	$(document).ready( function() {
		$('#count-wrap-12').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				var $this = $('#timer-12');
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
				$(this).unbind('inview');
			}
		});
	});
		$(document).ready( function() {
		var infowindowtext = "";
		var contstring = $('#infowindowtext').val();	
		var lines = contstring.split(/\n/g);
		for(var i=0; i < lines.length; i++) {	  
			 infowindowtext += lines[i];				  
		}

	   	/*var myLatlng = new google.maps.LatLng(34.048438, -118.243927);
	   	var styles = [
				{
					featureType: "natural",
					stylers: [
						{ hue: '#009387' }
					]
				},{
					featureType: "road",
					stylers: [
						{ hue: '#009387' },
						{ saturation: -70 }
					]
				},{
					featureType: "building",
					elementType: "labels",
					stylers: [
						{ hue: '' }
					]
				},{
					featureType: "poi", //points of interest
					stylers: [
						{ hue: '' }
					]
				}
			];
 		var mapOptions = {
			zoom: 13,
			scrollwheel: false,
			center: myLatlng,
			panControl: true,
			mapTypeControlOptions: {
			  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			  mapTypeIds: [
				google.maps.MapTypeId.ROADMAP,
				google.maps.MapTypeId.TERRAIN
			  ]
			},
			zoomControl: true,
			zoomControlOptions: {
			  style: google.maps.ZoomControlStyle.LARGE
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: styles
		}
		var map = new google.maps.Map(document.getElementById('mapCanvas-13'), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: '',
			animation: google.maps.Animation.DROP,
			title: 'SketchThemes'
		});
		var infowindow = new google.maps.InfoWindow({
			content: infowindowtext,
			maxWidth: 300
		});
					infowindow.open(map,marker);
				google.maps.event.addListener(marker, 'click', function () {
			infowindow.open(map, marker);
		});*/
	});
	
	$(document).ready(function(){$("#logo a, a#logo, #skenav a").each(function(){$(this).attr("href",$(this).attr("href")+"?no_redirect=true");});});