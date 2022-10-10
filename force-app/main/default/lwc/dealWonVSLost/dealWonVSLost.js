import { LightningElement } from 'lwc';

export default class DealWonVSLost extends LightningElement {
    value = false;
    handleClick(event){
        if(this.value==true){
            this.value = false;
        }
        else if (this.value==false) {
            this.value = true;
        } 
    }
}