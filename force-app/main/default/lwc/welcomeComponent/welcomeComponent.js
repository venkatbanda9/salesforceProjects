import { LightningElement } from 'lwc';

export default class WelcomeComponent extends LightningElement {
    letterHandler(event){
        var valueFromHtml = event.target.value;
        alert('entered value is ' + valueFromHtml);
    }
}