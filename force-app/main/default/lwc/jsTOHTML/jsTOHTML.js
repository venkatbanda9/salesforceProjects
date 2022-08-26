import { LightningElement } from 'lwc';

export default class JsTOHTML extends LightningElement {
    fullName = 'Venkat';

    changeNameHandler(event){
        this.fullName = 'Sai';
    }
}