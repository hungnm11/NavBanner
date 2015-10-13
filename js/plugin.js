(function($) {
	$.fn.tiki = function(options) {
		
		var settings = $.extend({
			text: "Hello World",
			color: null,
			fontStyle: null,
			complete: null
		}, options);
		
		return this.each(function() {
			
			
//			$(".list-group > .list-group-item").mouseover(function() {
//				$(".list-group-item a").addClass('active');
//				$(".list-group-item .nav-sub").show();
//			}).mouseout(function() {
//				$(".list-group-item a").removeClass('active');
//				$(".list-group-item .nav-sub").hide();
//			});
			
			$(".list-group > .list-group-item").hover(
				function() {
					$(this).addClass("selected").siblings("li").removeClass("selected");
					$(".list-group-item .nav-sub").show();
				},
				function() {
					$(this).removeClass("selected");
					$(".list-group-item .nav-sub").hide();
				}
			);
			
		
		});
	}
})(jQuery);