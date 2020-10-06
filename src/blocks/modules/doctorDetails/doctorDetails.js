
$(document).ready(function () {
    $('.certificates-carousel').owlCarousel({
        loop: false,
        responsiveClass: true,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 900,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            430: {
                items: 2,
                nav: true,
            },
            575.98: {
                items: 3,
                nav: true,

            },
            991.98: {
                items: 5,
                nav: true,
            },
            1199.98: {
                items: 6,
                nav: true,
            },
        }
    });
});

$('.certificates-carousel').click(function (e) {
    if (e.target.tagName === "IMG" && e.target.src) {
        console.log(e.target);
        document.querySelector('.certificate__modal-content img').setAttribute('src', e.target.src);
    }
});

let elements = $('.modal-overlay__certificate, .certificate__img-box');
$('.certificates-carousel img').click(function () {
    if (!elements.hasClass('activeModal')) {
        elements.addClass('activeModal');
        $('body').addClass('scroll-hidden');
    } else {
        elements.removeClass('activeModal');
        $('body').removeClass('scroll-hidden');
    }
});
$('.certificate__modal-content .close-modal').click(function () {
    elements.removeClass('activeModal');
    $('body').removeClass('scroll-hidden');

});

$(document).keydown(function (e) {
    if (e.keyCode === 27) {
        e.stopPropagation();
        elements.removeClass('activeModal');
        $('body').removeClass('scroll-hidden');
    }
});
$('.modal-overlay__certificate').click(function (e) {
    if ($(e.target).closest('.certificate__img-box').length == 0) {
        elements.removeClass('activeModal');
        $('body').removeClass('scroll-hidden');
    }
});