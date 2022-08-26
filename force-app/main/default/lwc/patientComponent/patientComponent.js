import { LightningElement } from 'lwc';

export default class PatientComponent extends LightningElement {

    boolValue = false;

    hideFormHandler(){
        this.boolValue = false;
    }
    showFormHandler(){
        this.boolValue = true;
    }
}