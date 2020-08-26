// header-fixed
window.onscroll = function () { headerFixed(); };
let header = document.querySelector('.header');
let sticky = header.offsetTop;
function headerFixed() {
    console.log(header.offsetTop);
    if (window.pageYOffset > sticky) {

        header.classList.add('header-fixed');
    }
    else if (window.pageYOffset == 0) {
        header.classList.remove('header-fixed');
    }
    else {
        header.classList.add('header-fixed');
    }
};
// mobile-btn
document.querySelector('.mobile').addEventListener('click', function () {
    document.querySelector('.bar1').classList.toggle('bar1-active');
    document.querySelector('.bar2').classList.toggle('bar2-active');
    document.querySelector('.bar3').classList.toggle('bar3-active');
    document.querySelector('.bar4').classList.toggle('bar4-active');
    document.querySelector('.mobile-menu__item').classList.toggle('mobile-menu__active');
});
