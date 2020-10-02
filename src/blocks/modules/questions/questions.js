
console.log('work');;
let toggle = false;
let list = document.querySelectorAll('.prices-list__item');
for (let e of list) {
  e.addEventListener('click', function () {
    console.log(e.children);
    if (toggle == false) {
      e.children[1].style.paddingBottom = '10px';
      e.style.color = '#04aac7';
      e.children[2].style.transform = 'rotate(90deg)';
      console.log(e.children[2].children[0]);
      // e.children[2].style.display = 'table';
      e.children[3].classList.add('show__table');

      toggle = true;
    }
    else {
      e.children[1].style.paddingBottom = '0px';
      e.style.color = '#505050';
      e.children[2].style.transform = 'rotate(0deg)';
      e.children[3].classList.remove('show__table');
      // e.children[2].style.display = 'none';
      toggle = false;
    }
  });
}
