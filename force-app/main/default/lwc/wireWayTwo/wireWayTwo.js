import { LightningElement, wire, track } from 'lwc';
import getAccountListMethodRef1 from '@salesforce/apex/AccountHelperClass.getAccountList';

export default class WireWayTwo extends LightningElement {
    @track varAccList;
    @track error1;

    @wire(getAccountListMethodRef1)
    wiredAccounts({error, data}){

        if(data){
            this.varAccList = data;
        }
        else if(error){
            console.log(error);
            this.error1 = error;
        }
    }
}