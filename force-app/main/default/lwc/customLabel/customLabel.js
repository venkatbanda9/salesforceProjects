import { LightningElement } from 'lwc';
import cardTitle from '@salesforce/label/c.cardTitle';
import Message_for_alert_button from '@salesforce/label/c.Message_for_alert_button';
import somemessage from '@salesforce/label/c.somemessage';
var msg = "" + Message_for_alert_button;
export default class CustomLabel extends LightningElement {
    customLabelList = {
        cardTitle, Message_for_alert_button, somemessage
    };
    
    alertHandler(event){
        alert('alert is ' + msg);
    }
}