// modules.define('appointment', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {

//             }
//         }
//     }
// }));

// });


//  *******  start castom select  ********

const getTemplate = (data = [], placeholder, selectedId) => {
    let text = placeholder ?? 'placeholder default';

    const items = data.map(item => {
        let cls = '';
        if (item.id === selectedId) {
            text = item.value;
            cls = 'selected';
        }
        return `
               <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
           `;
    });

    return `
    <div class="select__backdrop" data-type="backdrop" ></div>
    <div class="select__input" data-type="input">
    <span data-type="value">${text}</span>
    <i class="fas fa-chevron-down" data-type="arrow"></i>
   </div>
   <div class="select__dropdown">
       <ul class="select__list">
       ${items.join('')}
       </ul>
   </div>
    `;
};

export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.options = options;
        this.selectedId = options.selectedId;

        this.render();
        this.setup();
    }

    render() {
        const { placeholder, data } = this.options;
        this.$el.classList.add('select');
        this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
    }

    setup() {
        this.clickHandler = this.clickHandler.bind(this);
        this.$el.addEventListener('click', this.clickHandler);
        this.$arrow = this.$el.querySelector('[data-type="arrow"]');
        this.$value = this.$el.querySelector('[data-type="value"]');

    }

    clickHandler(event) {
        const { type } = event.target.dataset;

        if (type === 'input') {
            this.toggle();
        } else if (type === 'item') {
            const id = event.target.dataset.id;
            this.select(id);
            this.close();
        } else if (type === 'backdrop') {
            this.close();
        }

    }

    get isOpen() {
        return this.$el.classList.contains('open');
    }

    get current() {
        return this.options.data.find(item => item.id === this.selectedId);
    }

    select(id) {
        this.selectedId = id;
        this.$value.textContent = this.current.value;

        this.$el.querySelectorAll(`[data-type="item"]`).forEach(el => {
            el.classList.remove('selected');
        });
        this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected');

        this.options.onSelect ? this.options.onSelect(this.current) : null;
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.$el.classList.add('open');
        this.$arrow.classList.remove('fa-chevron-down');
        this.$arrow.classList.add('fa-chevron-up');

    }
    close() {
        this.$el.classList.remove('open');
        this.$arrow.classList.add('fa-chevron-down');
        this.$arrow.classList.remove('fa-chevron-up');
    }
    destroy() {
        this.$el.removeEventListener('click', this.clickHandler);
        this.$el.innerHTML = '';
    }
}

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
