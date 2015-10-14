(function($) {
	$.fn.tiki = function(options) {
		
		var settings = $.extend({
			
		}, options);
		
		return this.each(function() {
			var y = 0;
            var containerPhoto = $(".swiper-container-vertical");
            var items = containerPhoto.find(".swiper-slide");
            var containerThumbnail = $(".swiper-container");
            var itemsThumb = containerThumbnail.find(".swiper-slide");
            var containerHeight = 0;
            var numberVisible = $(".swiper-container-vertical > .swiper-wrapper > *").length;
            var heightPhoto = $(".swiper-container-vertical .swiper-slide img").height();
            var interValSecs = 3000;
            
            exSubMenu();
			
			
			function myFunc() {
                var imgPos = - (y * heightPhoto);
                if (y < numberVisible) {
                    itemsThumb.removeClass("active-nav");
                    itemsThumb.eq(y).addClass("active-nav");
                    containerPhoto.find(".swiper-wrapper").css({
                        top: imgPos + "px",
                    });
                    y++;
                } else {
                    y = 0;
                }
            }
            
			//Autoplay
            var init = setInterval(myFunc, interValSecs);
            
			// Mouseover and mouseout
            itemsThumb.on({
                mouseenter: function() {
                    var imgPos = - ($(this).index() * heightPhoto) ;
                    itemsThumb.removeClass("active-nav");
					itemsThumb.eq($(this).index()).addClass("active-nav");
					y = $(this).index();
                    containerPhoto.find(".swiper-wrapper").css({
                        top: imgPos + "px",
                    });
                    clearInterval(init);
                },
                mouseleave: function() {
                    init = setInterval(myFunc, interValSecs);
                }
            });
			
			// load() event and resize() event are combined 
   			$(window).ready(responsiveFn).resize(responsiveFn);
			
		});
        
		function responsiveFn() {
			width = $( window ).width();
			height = $( window ).height();

			// Do a custom code here

			if(width >= 992 && width <= 1199){
				$(".all-menu").on({
					click: function() {
						$(".list-group").toggle();
					}
				});
			} else if (width >= 768 && width <= 991) {
				$(".all-menu").on({
					click: function() {
						$(".list-group").toggle();
					}
				});
			} else if( width <= 767) {
				var dir = -285;
				
				$(".all-menu").click(function() {
					dir = dir === 0 ? -285 : 0;
					console.log(dir);
					$('.list-group').stop().animate({
					  left: dir
					}, 200);
				});
			}
			
		 }
		
		function exSubMenu() {
			$(".list-group-item").on("mouseover", function() {
				var $li = $(this);
				$li.find('a:first-child').addClass('active');
				$li.find('.nav-sub').show();
			});
			$(".list-group-item").on("mouseout", function() {
				var $li = $(this);
				$(".list-group-item a").removeClass('active');
				$(".list-group-item .nav-sub").hide();
			});
		}
        
	}
})(jQuery);