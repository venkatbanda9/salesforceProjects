import { LightningElement } from 'lwc';

export default class ValidationComponent extends LightningElement {

    validateHandler(){

        let nameVarRef = this.template.querySelector(".nameVar");
        let dateVarRef = this.template.querySelector(".dateVar");

        let nameVarValue = nameVarRef.value;
        let dateVarValue = dateVarRef.value;

        if(!nameVarValue){
            nameVarRef.setCustomValidity("Name is required!!");
        }
        else{
            nameVarRef.setCustomValidity("");
        }
        nameVarRef.reportValidity();

        if(!dateVarValue){
            dateVarRef.setCustomValidity("date is required!");
        }
        else{
            dateVarRef.setCustomValidity("");
        }
        dateVarRef.reportValidity();
    }
    resetHandler(){
        //reset fields of lightning input
        this.template.querySelectorAll('lightning-input').forEach(element => {
            if(element.type === 'checkbox' || element.type === 'checkbox-button'){
              element.checked = false;
            }
            else{
              element.value = null;
            }      
          });
    }
}