import $ from 'jquery';
$(document).ready(function () {
  $(".owl-three").owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.1,
      },
      500.98: {
        items: 2,
      },
      991.98: {
        items: 3,
      }
    }
  });

});

let tr = document.querySelectorAll('.table-prices tbody');
for (let e of tr) {
  console.log(e);
  for (let i = 0; i < e.children.length; i++) {
    if (i % 2 == 0) {
      e.children[i].style.backgroundColor = '#eee';
    }
  }
}

console.log(tr[1].children.length);
let toggle = false;
let list = document.querySelectorAll('.prices-list__item');
for (let e of list) {
  e.addEventListener('click', function () {
    console.log(e.children);
    if (toggle == false) {
      e.children[0].style.paddingBottom = '10px';
      e.style.color = '#04aac7';
      e.children[1].style.transform = 'rotate(45deg)';
      e.children[2].style.display = 'table';
      toggle = true;
    }
    else {
      e.children[0].style.paddingBottom = '0px';
      e.style.color = '#505050';
      e.children[1].style.transform = 'rotate(0deg)';
      e.children[2].style.display = 'none';
      toggle = false;
    }
  });
}
