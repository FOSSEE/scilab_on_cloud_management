(function($) {
	$(document).ready(function() {

		var basePath = Drupal.settings.basePath;
		var modPath1 = basePath + "scilab-on-cloud-management/display-books/";
		$Selected = $(".selected");
		$Selected.click(function(e) {
			$(".sync-msg").remove();
			$(this).after("<span class='sync-msg'>Saving...</span>");
			$.ajax({
				url: modPath1 + "ajax/selected/" + $(this).attr("data-bid"),
				success: function(data) {
					$(".sync-msg").remove();
					console.log("success");
					console.log(data);
				}
			});
		});


	});
})(jQuery);
