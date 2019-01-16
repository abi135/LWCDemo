import { LightningElement, track } from 'lwc';

export default class As extends LightningElement {
    @track greeting = 'Abhishek Keep Learning...... ';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}