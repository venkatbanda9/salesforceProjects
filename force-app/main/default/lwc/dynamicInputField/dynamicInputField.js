import { LightningElement } from 'lwc';

export default class DynamicInputField extends LightningElement {
    inVal = '';
    ischanged(event){

        this.inVal = event.target.value;
    }
}