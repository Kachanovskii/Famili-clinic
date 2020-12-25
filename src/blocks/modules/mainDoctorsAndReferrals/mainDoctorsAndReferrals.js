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

let $link = document.querySelectorAll('.link');
console.log($link.length );
for (let j = 0; j < $link.length; j++) {  
    $link[j].addEventListener('click', ()=>{
        for(let n=0; n<$link.length; n++){
            $link[n].classList.remove('active')
        }
        if($link[j]){
            $link[j].classList.add('active')
        }
    })
}

