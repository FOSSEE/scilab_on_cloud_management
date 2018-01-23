(function($) {
	$(document).ready(function() {

		var basePath = Drupal.settings.basePath;
		var modPath1 = basePath + "scilab-on-cloud-management/display-books/";
		$Selected_book = $(".selected-book");
		$Selected_chapter = $(".selected-chapter");
		$Selected_example = $(".selected-example");

		$Selected_book.click(function(e) {
			$(".sync-msg").remove();
			$(this).after("<span class='sync-msg'>Saving...</span>");
			$.ajax({
				url: modPath1 + "ajax/book/" + $(this).attr("data-bid"),
				success: function(data) {
					$(".sync-msg").remove();
					console.log("success");
				}
			});
		});
        $Selected_chapter.click(function(e) {
			$(".sync-msg").remove();
			$(this).after("<span class='sync-msg'>Saving...</span>");
			$.ajax({
				url: modPath1 + "ajax/chapter/" + $(this).attr("data-bid"),
				success: function(data) {
					$(".sync-msg").remove();
					console.log("success");
				}
			});
		});
        $Selected_example.click(function(e) {
			$(".sync-msg").remove();
			$(this).after("<span class='sync-msg'>Saving...</span>");
			$.ajax({
				url: modPath1 + "ajax/example/" + $(this).attr("data-bid"),
				success: function(data) {
					$(".sync-msg").remove();
					console.log("success");
				}
			});
		});


	});
})(jQuery);
