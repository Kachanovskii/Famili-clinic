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
