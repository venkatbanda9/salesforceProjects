import { LightningElement } from 'lwc';

export default class HTMLtoJS extends LightningElement {

    dispTxt = '';

    ischanged(event){
        this.dispTxt = event.target.value;
    }
    
    valueHandler(){

        alert('entered input is: ' + this.dispTxt);
    }
}