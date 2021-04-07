var elements = $('.modal-overlay, .modal');
$(document).ready(function ($) {
  $('.close-modal').click(function () {
    elements.removeClass('active');
    $('body').removeClass('scroll-hidden');
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      elements.removeClass('active');
      $('body').removeClass('scroll-hidden');
    }
  });

  $('.modal-overlay').click(function (e) {
    if ($(e.target).closest('.modal').length == 0) {
      elements.removeClass('active');
      $('body').removeClass('scroll-hidden');
    }
  });
});
//  *******  start castom select  ********
import Select from '../../../js/import/customSelect/customSelect';

const data = [
  { id: '1', value: 'Оберіть послугу' },
  { id: '2', value: 'Cімейний лікар' },
  { id: '3', value: 'Урологія' },
  { id: '4', value: 'Ультразвукова діагностика' },
  { id: '5', value: 'Отоларинологія (ЛОР)' },
  { id: '6', value: 'Массаж' },
  { id: '7', value: 'Гінекологія' },
  { id: '8', value: 'Дерматологія' },
  { id: '9', value: 'Косметологія' },
  { id: '10', value: 'Хірургія' },
  { id: '11', value: 'Еститична гінекологія' },
];

const selectPopupWindow = new Select('#selectPopupWindow', {
  placeholder: 'Please select item',
  selectedId: '1',
  data,
  onSelect(item) {
    console.log('Selected Item', item);
  },
});

$('.slider__btn, .card-info a').click(function (e) {
  elements.addClass('active');
  $('body').addClass('scroll-hidden');
  data.map((item) => {
    if (item.value === e.target.dataset.namedirection) {
      selectPopupWindow.select(item.id);
    }
  });
});

$('.header-top__btn').click(function () {
  elements.addClass('active');
  $('body').addClass('scroll-hidden');
  selectPopupWindow.select('1');
});

//  *******  end castom select  ********

const moment = require('moment');
document
  .getElementById('popupWindowAppointment_form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    let $service = selectPopupWindow.current.value;
    let $phone = document.querySelector(
      '#popupWindowAppointment_form [name="phone"]'
    ).value;
    let $name = document.querySelector(
      '#popupWindowAppointment_form [name="name"]'
    ).value;
    let $date = document.querySelector(
      '#popupWindowAppointment_form [name="date"]'
    ).value;
    let dateNow = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');

    let newPopupWindowAppointment = {
      service: $service,
      name: $name,
      phone: $phone,
      date: $date,
    };
    fetch(
      `https://api.telegram.org/bot1461272815:AAELZnj3YdSHVItWSyK0N8wHkQkPIdRl-eQ/sendMessage?chat_id=-311294005&text=New+Appointment+from+Family+Clinic%0AService:+${
        newPopupWindowAppointment.service
      }%0AName:+${newPopupWindowAppointment.name}%0APhone:+${
        '%2B' + newPopupWindowAppointment.phone
      }%0AAppointment+date:+${
        newPopupWindowAppointment.date
      }%0Application time:+${dateNow}`
    )
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        let $statusMessage = document.querySelector(
          '.popupWindowAppointmentMessege'
        );
        let status = '';

        if (data.ok) {
          status = 'success';
          $statusMessage.classList.add(status);
          $statusMessage.innerHTML = 'Ваша заявка успішно подана 🙂 !';
        } else {
          status = 'error';
          $statusMessage.classList.add(status);
          $statusMessage.innerHTML = 'Виникла помилка 🙁 спробуйте ще раз!';
        }
        var elements = $('.modal-overlay, .modal');
        setTimeout(() => {
          $statusMessage.classList.remove(status);
          elements.removeClass('active');
          $('body').removeClass('scroll-hidden');
        }, 5000);
      });
  });

// fetch('http://localhost:8000/popupWindowAppointment', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json"
//         },
//     body: JSON.stringify(newPopupWindowAppointment)
// }).then(responce => {
//     return responce.json();
// }).then(data => {
// let $statusMessage = document.querySelector('.popupWindowAppointmentMessege');
// $statusMessage.classList.add(data.status);
// $statusMessage.innerHTML = data.message;
// setTimeout(()=> {
//     $statusMessage.classList.remove(data.status);
// }, 5000);

// document.getElementById('appointment__form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     let $service = select.current.value;
//     let $phone = document.querySelector('#appointment__form input[name="phone"]').value;
//     let $name = document.querySelector('#appointment__form input[name="name"]').value;
//     let $date = document.querySelector('#appointment__form input[name="date"]').value;

//     let newAppointment = {
//         service: $service,
//         name: $name,
//         phone: $phone,
//         date: $date
//     };
//     fetch('http://localhost:8000/appointment', {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newAppointment)
//     }).then(responce => {
//         return responce.json();
//     }).then(data => {
//         let $statusMessage = document.querySelector('.appointment_message');
//         $statusMessage.classList.add(data.status);
//         $statusMessage.innerHTML = data.message;
//         setTimeout(() => {
//             $statusMessage.classList.remove(data.status);
//         }, 5000);
//     });

//     console.log(newAppointment);
// });
