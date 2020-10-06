// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction(); };

// Get the header
let header = document.querySelector(".header-top__section");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > 60) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// mobile-btn
document.querySelector('.mobile-menu').addEventListener('click', function () {
    // document.querySelector('.header').classList.toggle('header-mobile-menu');
    document.querySelector('.bar1').classList.toggle('bar1-active');
    document.querySelector('.bar2').classList.toggle('bar2-active');
    document.querySelector('.bar3').classList.toggle('bar3-active');
    document.querySelector('.bar4').classList.toggle('bar4-active');

    // document.querySelector('.mobile-menu__item').classList.toggle('mobile-menu__active');

    document.querySelector('.mobile-navigation').classList.toggle('show-m-navigation');
    document.querySelector('body').classList.toggle('scroll-hidden');
});

let link = document.URL;
let a = document.querySelectorAll('.navigation__link');
for (let i = 0; i < a.length; i++) {
    if (a[i].href == link) {
        console.log(a[4].href);
        if (i == 3) {
            a[i].classList.add('active-point-red');
        }
        a[i].classList.add('active-point');
        a[i].style.opacity = '0.7';
    }
}
let link_mobil = document.querySelectorAll('.mob-link');
for (let i = 0; i < link_mobil.length; i++) {
    if (link_mobil[i].href == link) {
        if (i == 3) {
            link_mobil[i].classList.add('active-point-red');
        }
        link_mobil[i].classList.add('mob-active-point');
        link_mobil[i].style.opacity = '0.7';
    }
}


