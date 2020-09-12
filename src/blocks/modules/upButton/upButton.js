jQuery(document).ready(function () {
    var btn = $('#upButton');
    window.addEventListener('scroll', function () {
        if ($(window).scrollTop() > 600) {
            btn.addClass('show');
            if (($(window).scrollTop() + $(window).height()) > ($(document).height() - ($(".footer_main").height() + 280))) {
                $(".footer_main").css("opacity", "1");
                $("body").css("background-color", "#0c4459");
            } else {
                $("body").css("background-color", "#fcfcfc");
                $(".footer_main").css("opacity", "0");
            }
        }
        else {
            btn.removeClass('show');
            $("body").css("background-color", "#fcfcfc");
        }
    });
    btn.on('click', function (e) {
        $(".footer_main").css("opacity", "0");
        $("body").css("background-color", "#fcfcfc");
        $('html, body').animate({ scrollTop: 0 }, 700);
    });
});

