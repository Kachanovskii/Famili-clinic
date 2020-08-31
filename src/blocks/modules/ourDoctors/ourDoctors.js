
// *******************   ourDoctors  **************************
$(document).ready(function () {
    $('.owl-two').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        smartSpeed: 900,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            575.98: {
                items: 3,
                nav: true
            },
            991.98: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
});
// *******************   ourDoctors  **************************
