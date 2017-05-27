$(function() {
/*--Main nav-----------------------------------*/ 

	$('.navbar-toggle').jPushMenu({ closeOnClickLink: false });
	$('.dropdown-toggle').dropdown();

	$('.footer .navbar-toggle').on('click', function() {
		$('.header .navbar-toggle').click();
	});

/*--------------------------------------------------*/ 
	
	$('.promo-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		navText: '',
		smartSpeed: 600
	});

	$('.client-slider .owl-carousel').owlCarousel({
		items: 7,
		nav: true,
		loop: true,
		dots: false,
		navText: '',
		responsive: {
			768: { items: 7 },
			506: { items: 4 },
			0: { items: 2	}
		}
	});

/*--slider with thumbs------------------*/

	var slider = $('#slider');
  	var thumbnailSlider = $('#thumbnailSlider');
  	var duration = 500;

	slider.owlCarousel({
		loop: false,
		nav: false,
		items: 1,
		dots: false
	}).on('changed.owl.carousel', function (e) {
		thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
	});

	thumbnailSlider.owlCarousel({
		loop: false,
  		nav: false,
  		margin: 18,
   	responsive: {
	    	0: { items: 3 },
	    	600: { items: 4 },
			1000: { items: 4 }
   	}
  	}).on('click', '.owl-item', function () {
   	slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);
  	}).on('changed.owl.carousel', function (e) {
   	slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
	});

  	$('.slider-right').click(function() {
		slider.trigger('next.owl.carousel');
  	});
  	$('.slider-left').click(function() {
		slider.trigger('prev.owl.carousel');
  	});

/*--AJAX Form submit--------------------*/

	$(document).on('af_complete', function(event,response) {
		var form_id = response.form.parents('.modal').attr('id');
		if (response.success) {
			$('#'+form_id).modal('hide');
			$('#modal-mes').modal('show');
		}
	});

/*--Animation-------------------*/

	window.sr = ScrollReveal();
	sr.reveal('.reveal-anim', { duration: 800 });
	sr.reveal('.reveal-anim', { afterReveal: function(domEl) { 
			$(domEl).css({ 
				'-webkit-transform': 'none', 
				'transform': 'none'
			});
		} });
	sr.reveal('.reveal-left', { duration: 800, origin: 'left', distance: '100px' });
	sr.reveal('.reveal-right', { duration: 800, origin: 'right', distance: '100px' });
});

/*!
 * jPushMenu.js
 * 1.1.1
 * @author: takien
 * http://takien.com
 * Original version (pure JS) is created by Mary Lou http://tympanus.net/
 */
(function($) {
	$.fn.jPushMenu = function(customOptions) {
		var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);
		/* add class to the body.*/
		var that = $('.header .navbar-toggle');
		
		$('body').addClass(o.bodyClass);
		that.addClass('jPushMenuBtn');
		that.click(function() {
			var target         = '',
			push_direction     = '';
			
			if(that.is('.'+o.showLeftClass)) {
				target         = '.cbp-spmenu-left';
				push_direction = 'toright';
			}
			else if(that.is('.'+o.showRightClass)) {
				target         = '.cbp-spmenu-right';
				push_direction = 'toleft';
			}
			else if(that.is('.'+o.showTopClass)) {
				target         = '.cbp-spmenu-top';
			}
			else if(that.is('.'+o.showBottomClass)) {
				target         = '.cbp-spmenu-bottom';
			}
			
			that.toggleClass(o.activeClass);
			$(target).toggleClass(o.menuOpenClass);
			
			if(that.is('.'+o.pushBodyClass)) {
				$('body').toggleClass( 'cbp-spmenu-push-'+push_direction );
			}
			
			/* disable all other button*/
			$('.jPushMenuBtn').not(that).toggleClass('disabled');
			
			return false;
		});
		var jPushMenu = {
			close: function (o) {
				$('.jPushMenuBtn,body,.cbp-spmenu').removeClass('disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright');
			}
		}

    if(o.closeOnClickOutside) {
			$(document).click(function() {
				jPushMenu.close();
				$('.jPushMenuBtn').removeClass('menu-active');
			});

			$(document).on('click touchstart', function(){
				jPushMenu.close();
				$('.jPushMenuBtn').removeClass('menu-active');
			});

			$('.cbp-spmenu,.toggle-menu').click(function(e){
				e.stopPropagation();
			});

			$('.cbp-spmenu,.toggle-menu').on('click touchstart', function(e){
				e.stopPropagation();
			});
		}

        // On Click Link
        if(o.closeOnClickLink) {
            $('.cbp-spmenu a').on('click',function(){
                jPushMenu.close();
            });
        }
	};
 
   /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
	$.fn.jPushMenu.defaultOptions = {
		bodyClass       : 'cbp-spmenu-push',
		activeClass     : 'menu-active',
		showLeftClass   : 'menu-left',
		showRightClass  : 'menu-right',
		showTopClass    : 'menu-top',
		showBottomClass : 'menu-bottom',
		menuOpenClass   : 'cbp-spmenu-open',
		pushBodyClass   : 'push-body',
		closeOnClickOutside: true,
		closeOnClickInside: true,
		closeOnClickLink: true
	};
})(jQuery);