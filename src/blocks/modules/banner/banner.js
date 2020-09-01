import $ from 'jquery';
$(document).ready(function () {
    $(".owl-one").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        // autoplay: true,
        // autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        responsiveClass: true,
        // responsive: {
        //     0: {
        //         // nav: true
        //     },
        //     600: {
        //         // nav: false
        //     },
        //     1000: {
        //         // nav: true,
        //         loop: false
        //     }
        // }
    });

});