$(document).ready(function() {
    $("#myNav li a").on("mouseover", function() {
        let index = $(this).closest("li").index("#myNav li"); // Count only <li> elements
        $("#navImage img").hide().eq(index).show();
    });
});