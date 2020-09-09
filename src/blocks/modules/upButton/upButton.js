jQuery(document).ready(function () {
    var btn = $('#upButton');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            btn.addClass('show');
            if ($(window).scrollTop() > 2000) {
                $(".footer_main").css("display", "block");
                $("body").css("background-color", "#0c4459");
            } else {
                $("body").css("background-color", "#fcfcfc");
                $(".footer_main").css("display", "none");
            }
        }
        else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 700);
    });
});

