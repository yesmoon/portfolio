$(document).ready(function() {

   $(".button").click(function() {

	if ($(this).next(".accordion").is(":hidden")) {
			// $(".accordion").slideUp("fast");
		$(this).next(".accordion").slideDown("fast");
		}
		
		else if ($(".accordion").is(":visible")) {
			$(this).next(".accordion").slideUp("fast");
		}
	});

    jQuery(".accordion").hide();

    $(".button:first").trigger("click");

    $(".button").click(function(e){
    	e.preventDefault();
    	$(this).find('span').toggleClass('active inactive');
    });


});
