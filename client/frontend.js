import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.0/dist/vue.esm.browser.js';

new Vue({
    el: '#app',
    data() {
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: [
                {id: 1, name: 'Ruslan', value: '+7-921-100-20-30', marked: false}
            ],
        }
    },
    methods: {
        createContact() {
           const {...contact} = this.form
           
           this.contacts.push({...contact, id: Date.now()})
           
           this.form.name = this.form.value = '';
        },
        markContact(id) {
            const contact = this.contacts.find(c => c.id === id)
            contact.marked = true;
        },
        removeContact(id) {

        }
    }
});