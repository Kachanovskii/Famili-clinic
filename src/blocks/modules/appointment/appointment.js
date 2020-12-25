//  *******  start castom select  ********
import Select from '../../../js/import/customSelect/customSelect';
const select = new Select('#select', {
    placeholder: 'Please select item',
    selectedId: '1',
    data: [
        { id: '1', value: 'Оберіть послугу' },
        { id: '2', value: 'Angular' },
        { id: '3', value: 'Vue' },
        { id: '4', value: 'React Native' },
        { id: '5', value: 'Next' },
        { id: '6', value: 'Nefdsfst' },
        { id: '7', value: 'React' },
        { id: '8', value: 'Anfsfgular' },
        { id: '9', value: 'Vue' },
        { id: '10', value: 'React Native' },
        { id: '11', value: 'Nexsdft' },
        { id: '12', value: 'Nesfst' },
    ],
    onSelect(item) {
        console.log('Selected Item', item);
    }

});
//  *******  end castom select  ********

document.querySelector('.contact-form__button input').addEventListener('click', (e) => {
    e.preventDefault();
});;

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
    fetch('http://localhost:8000/appointment', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppointment)
    }).then(responce => {
        return responce.json();
    }).then(data => {
        let $statusMessage = document.querySelector('.appointment_message');
        $statusMessage.classList.add(data.status);
        $statusMessage.innerHTML = data.message;
        setTimeout(() => {
            $statusMessage.classList.remove(data.status);
        }, 5000);
    });

    console.log(newAppointment);
});;


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
