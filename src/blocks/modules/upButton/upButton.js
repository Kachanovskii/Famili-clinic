jQuery(document).ready(function () {
    var btn = $('#upButton');
    window.addEventListener('scroll', function () {
        if ($(window).scrollTop() > 600) {
            btn.addClass('show');
            if (($(window).scrollTop() + $(window).height()) > ($(document).height() - ($(".footer_main").height() + $(".appointment").height()))) {
                $(".footer_main").css("display", "block");
                $("body").css("background-color", "#0c4459");
            } else {
                $("body").css("background-color", "#fcfcfc");
                $(".footer_main").css("display", "none");
            }
        }
        else {
            btn.removeClass('show');
            $("body").css("background-color", "#fcfcfc");
        }
    });
    btn.on('click', function (e) {
        $(".footer_main").css("display", "none");
        $("body").css("background-color", "#fcfcfc");
        $('html, body').animate({ scrollTop: 0 }, 700);
    });
});

