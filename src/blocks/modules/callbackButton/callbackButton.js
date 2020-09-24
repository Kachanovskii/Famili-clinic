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