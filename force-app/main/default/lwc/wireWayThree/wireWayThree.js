import { LightningElement, wire, track} from 'lwc';
import getAccountListMethodRef1 from '@salesforce/apex/AccountHelperClass.getAccountList';

export default class WireWayThree extends LightningElement {

    @track varAccList;
    @track error;

    fireHandler3(){
        getAccountListMethodRef1()
            .then(result => {
                this.varAccList = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

    
}