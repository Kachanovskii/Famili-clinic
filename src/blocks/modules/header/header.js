// header - fixed;
// window.onscroll = function () { headerFixed(); };
// let header = document.querySelector('.header');
// let sticky = header.offsetTop;
// function headerFixed() {

//     if (window.pageYOffset > 150) {
//         header.classList.add('header-fixed');
//         

//     }
//     else {
//         
//     }
// }

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    console.log(window.pageYOffset);
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header-fixed").style.top = "0";
    } else {
        document.querySelector(".header-fixed").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
};




// mobile-btn
document.querySelector('.mobile').addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('header-mobile-menu');
    document.querySelector('.bar1').classList.toggle('bar1-active');
    document.querySelector('.bar2').classList.toggle('bar2-active');
    document.querySelector('.bar3').classList.toggle('bar3-active');
    document.querySelector('.bar4').classList.toggle('bar4-active');
    document.querySelector('.mobile-menu__item').classList.toggle('mobile-menu__active');
});

