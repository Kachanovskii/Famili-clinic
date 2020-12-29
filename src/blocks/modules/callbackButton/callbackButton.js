let $text_call = document.querySelector('.text-call');
let $callback_bt = document.querySelector('.callback-bt');

function showHidenBackgCallbackButton() {
    $text_call.classList.toggle('text-call-hover');
    $callback_bt.classList.toggle('callback-bt-hover');
}

setInterval(showHidenBackgCallbackButton, 5000);

$('.callback-bt__modal-content input[type="submit"]').click(function (e) {
    var elements = $('.callback-bt-input, .modal-overlay__bt-input');
    e.preventDefault();
    elements.removeClass('activeModal');
    $('body').removeClass('scroll-hidden');
});


$(document).ready(function ($) {
    var elements = $('.callback-bt-input, .modal-overlay__bt-input');
    $('.callback-bt').click(function () {
        if (!elements.hasClass('activeModal')) {
            elements.addClass('activeModal');
            $('body').addClass('scroll-hidden');
            setTimeout(() => {
                $('#focus').focus();
            }, 1000);

        } else {
            elements.removeClass('activeModal');
            $('body').removeClass('scroll-hidden');
        }
    });
    $('.callback-bt__modal-content .close-modal').click(function () {
        elements.removeClass('activeModal');
        $('body').removeClass('scroll-hidden');

    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            elements.removeClass('activeModal');
            $('body').removeClass('scroll-hidden');
        }
    });
    $('.modal-overlay__bt-input').click(function (e) {
        if ($(e.target).closest('.callback-bt-input').length == 0) {
            elements.removeClass('activeModal');
            $('body').removeClass('scroll-hidden');
        }
    });
});

const moment = require('moment');
document.getElementById('callback__form').addEventListener('submit', (e) => {
    e.preventDefault();
    let $phone = document.querySelector('#callback__form [name = "phone"]').value;
    
    let dateNow = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');

    let newCallback = {
        phone: $phone
    }

    fetch(`https://api.telegram.org/bot1461272815:AAELZnj3YdSHVItWSyK0N8wHkQkPIdRl-eQ/sendMessage?chat_id=-311294005&text=New+Callback%0APhone:+${'%2B' + newCallback.phone}%0AApplication time:+${dateNow}`).then(responce => {
        return responce.json();
    }).then(data => {
        let $statusMessage = document.querySelector('.callbackMessage');
        let status = '';

        if (data.ok) {
            status = 'success';
            $statusMessage.classList.add(status);
            $statusMessage.innerHTML = ' Ваше замовлення на зворотній дзвінок успішно прийнята 🙂 Наш працівник скоро зв’яжеться з Вами !';
        } else {
            status = 'error';
            $statusMessage.classList.add(status);
            $statusMessage.innerHTML = 'Виникла помилка 🙁 спробуйте ще раз!';
        }
        var elements = $('.callback-bt-input, .modal-overlay__bt-input');
        setTimeout(() => {
            elements.removeClass('activeModal');
        $statusMessage.classList.remove(data.status)
        $statusMessage.innerHTML = '';
        $statusMessage.innerHTML = '';
        }, 5000);
        console.log(data);
    })
  
})


// fetch('http://localhost:8000/callback', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newCallback)
// }).then(responce => {
//     return responce.json();
// }).then(data => {
//     let $statusMessage = document.querySelector('.callbackMessage');
//     var elements = $('.callback-bt-input, .modal-overlay__bt-input');

//     $statusMessage.classList.add(data.status);
//     $statusMessage.innerHTML = data.message;
//     setTimeout(() => {
//         elements.removeClass('activeModal');
//         $statusMessage.classList.remove(data.status)
//         $statusMessage.innerHTML = '';
//     }, 5000);
    
// }).catch((e) => {
//     console.log(e);
// })