$(document).ready(function () {

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        var window_height = $(window).height();

        if(scroll >= window_height) 
        {
            $("header").addClass("header-fixed");
        } 
        else 
        {
            $("header").removeClass("header-fixed");
        }
    });

});