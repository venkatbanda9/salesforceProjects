import { LightningElement } from 'lwc';

export default class HTMLtoJS extends LightningElement {

    
    
    valueHandler(){
        let inTxtRef = this.template.querySelector(".inText");
        alert('entered input is: ' + inTxtRef.value);
    }
}