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
});

