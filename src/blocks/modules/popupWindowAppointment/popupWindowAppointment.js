$(document).ready(function ($) {
    var elements = $('.modal-overlay, .modal');
    $('.button').click(function () {
        elements.addClass('active');
    });

    $('.close-modal').click(function () {
        elements.removeClass('active');
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            elements.removeClass('active');

        }
    });

    $('.modal-overlay').click(function (e) {
        if ($(e.target).closest('.modal').length == 0) {
            elements.removeClass('active');
        }
    });
});


//  *******  start castom select  ********
import Select from '../../../js/import/customSelect/customSelect';

const selectPopupWindow = new Select('#selectPopupWindow', {
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