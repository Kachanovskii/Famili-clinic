jQuery(document).ready(function () {
    var btn = $('#upButton');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            btn.addClass('show');
            $("body").css("background-color", "#0c4459");
            $(".footer_main").css("display", "block");
        } else {
            btn.removeClass('show');
            $("body").css("background-color", "#fcfcfc");
            $(".footer_main").css("display", "none");
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 700);
    });
});
