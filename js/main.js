$(document).ready(function () {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    if (windowWidth>windowHeight && windowWidth<=800) {
        $(".content .main-content .products .product img").css({'height':(($(window).height())-60)+'px'});
    } else {
        $(".content .main-content .products .product img").css({'height':'auto'});
    }

    $("#opt-out").click(function(e){
        $(this).addClass('hide');
        $(".content .main-content .products .product img").css({'height':'auto'});
        $(".wrapper").addClass('opt-out');
        e.preventDefault();
    });
});
$(window).resize(function() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    if (windowWidth>windowHeight && windowWidth<=800) {
        $(".content .main-content .products .product img").css({'height':(($(window).height())-60)+'px'});

        $("#opt-out").removeClass('hide');
        $(".wrapper").removeClass('opt-out');
    } else {
        $(".content .main-content .products .product img").css({'height':'auto'});
    }
});
