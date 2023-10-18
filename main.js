$(document).mousemove(function(event) {
    var windowWidth = $(window).width();
    var mouseX = event.pageX;
    
    var widthPercentage = (mouseX / windowWidth) * 100;
    
    $("#left-side").css("width", widthPercentage + "%");
});
