import { event } from 'jquery';
import Select from '../../../js/import/customSelect/customSelect';

const selectPopupWindow = new Select('#selectReviews', {
    placeholder: 'Please select item',
    selectedId: '1',
    data: [
        { id: '1', value: 'Оберіть лікаря' },
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

jQuery(document).ready(function () {
    jQuery("a.scrollto").click(function () {
        let elementClick = jQuery(this).attr("href");
        let destination = jQuery(elementClick).offset().top - 90;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });
});