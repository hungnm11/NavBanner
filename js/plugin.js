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
		});
        
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