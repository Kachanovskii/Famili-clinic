//  *******  start castom select  ********
import Select from '../../../js/import/customSelect/customSelect';
const select = new Select('#select', {
    placeholder: 'Please select item',
    selectedId: '1',
    data: [
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
    ],
    onSelect(item) {
        console.log('Selected Item', item);
    }

});
//  *******  end castom select  ********

document.querySelector('.contact-form__button button').addEventListener('click', (e) => {
    e.preventDefault();
});

const moment = require('moment');
document.getElementById('appointment__form').addEventListener('submit', (e) => {
    e.preventDefault();
    let $service = select.current.value;
    let $phone = document.querySelector('#appointment__form input[name="phone"]').value;
    let $name = document.querySelector('#appointment__form input[name="name"]').value;
    let $date = document.querySelector('#appointment__form input[name="date"]').value;

    let newAppointment = {
        service: $service,
        name: $name,
        phone: $phone,
        date: $date
    };

    let dateNow = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
    fetch(`https://api.telegram.org/bot1461272815:AAELZnj3YdSHVItWSyK0N8wHkQkPIdRl-eQ/sendMessage?chat_id=-311294005&text=New+Appointment+from+Family+Clinic%0AService:+${newAppointment.service}%0AName:+${newAppointment.name}%0APhone:+${'%2B' + newAppointment.phone}%0AAppointment+date:+${newAppointment.date}%0AApplication time:+${dateNow}`).then(responce => {
        return responce.json();
    }).then(data => {
        let $statusMessage = document.querySelector('.appointment_message');
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
        setTimeout(() => {
            $statusMessage.classList.remove(status);
        }, 5000);
        console.log(data);
    });

    console.log(newAppointment);
});

//  *******  start appointment fetch  ********
// const URL = 'http://localhost';

// function getAppointmentForm() {

// }

// function sendRequest(method, url, body = null) {
//     const headers = {
//         'Content-Type': 'application/json'
//     };

//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//     }).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         return response.json().then(err => {
//             const e = new Error('Щось пішло не так');
//             e.data = err;
//             throw e;
//         });
//     });
// }


// sendRequest('POST', URL, body)
//     .then(data => console.log(data))
//     .catch(data => console.log(data));

//  *******  end appointment fetch  ********
