let toggle = false;
let list = document.querySelectorAll('.questions-sections__item');
for (let e of list) {
  e.addEventListener('click', function () {
    if (toggle == false) {
      console.log(e.children);
      e.children[0].classList.add('list-i-active');
      e.children[1].style.paddingBottom = '10px';
      e.children[2].style.transform = 'rotate(90deg)';
      e.children[3].classList.add('show__sections');
      toggle = true;
    }
    else {
      e.children[1].style.paddingBottom = '0px';
      e.children[0].classList.remove('list-i-active');
      e.children[2].style.transform = 'rotate(0deg)';
      e.children[3].classList.remove('show__sections');
      toggle = false;
    }
  });
}
