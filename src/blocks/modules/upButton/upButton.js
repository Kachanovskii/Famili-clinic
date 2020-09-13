jQuery(document).ready(function () {
    var btn = $('#upButton');
    window.addEventListener('scroll', function () {
        if ($(window).scrollTop() > 600) {
            btn.addClass('show');
            if (($(window).scrollTop() + $(window).height()) > ($(document).height() - ($(".footer_main").height() + 250))) {
                $("body").css("background-color", "#0c4459");
                $(".footer_main").css("visibility", "visible");
            } else {
                $("body").css("background-color", "#fcfcfc");
                $(".footer_main").css("visibility", "hidden");
            }
        }
        else {
            btn.removeClass('show');
            $("body").css("background-color", "#fcfcfc");
        }
    });
    btn.on('click', function (e) {
        $('html, body').animate({ scrollTop: 0 }, 700);
    });
});

