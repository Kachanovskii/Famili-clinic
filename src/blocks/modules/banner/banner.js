import $ from 'jquery';
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                nav: true
            },
            600: {
                nav: false
            },
            1000: {
                nav: true,
                loop: false
            }
        }
    });

});
// console.log(1);