$(document).ready(function () {
    $('.navbar-icon-wrapper').click(function () {
        $(this).toggleClass('open');
        $('.mainDoctorsAndReferrals__navbar').toggleClass('open');
        $('body').toggleClass('scroll-hidden');

    });
    $('.mainDoctorsAndReferrals__navbar').click(function (e) {
        if ($(e.target).closest('.mainDoctorsAndReferrals__navbar-content').length == 0) {
            $('.mainDoctorsAndReferrals__navbar, .navbar-icon-wrapper').removeClass('open');
            $('body').removeClass('scroll-hidden');
        }
    });
});