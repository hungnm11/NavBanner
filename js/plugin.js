(function($) {
	$.fn.tiki = function(options) {
		
		var settings = $.extend({
			text: "Hello World",
			color: null,
			fontStyle: null,
			complete: null
		}, options);
		
		return this.each(function() {
			
//			$(".list-group-item").on("mouseover", function() {
//				var $li = $(this);
//				$li.find('a').addClass('active');
//				$li.find('.nav-sub').show();
//			});
//			$(".list-group-item").on("mouseout", function() {
//				var $li = $(this);
//				$(".list-group-item a").removeClass('active');
//				$(".list-group-item .nav-sub").hide();
//			});
			
			expendPopup();
		
		});
		
		function expendPopup() {
			$(".list-group-item").on("mouseover", function() {
				var $li = $(this);
				$li.find('a').addClass('active');
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