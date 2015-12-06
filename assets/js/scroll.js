$(document).ready(function(){
	$('a.scroll').click(function(){
			$('html, body').animate({ 
			scrollTop: $($(this).attr("href"))
			.offset().top }, 2000);
			return false;
		});
});
