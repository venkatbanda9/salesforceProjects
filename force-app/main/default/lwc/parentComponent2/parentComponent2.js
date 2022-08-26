import { LightningElement } from 'lwc';

export default class ParentComponent2 extends LightningElement {
    handleChildEvent(event){
        const mdata1 = event.detail.mdata1;
        const mdata2 = event.detail.mdata2;

        alert('data 1 received from parent is: ' + mdata1);
        alert('data 2 received from parent is: ' + mdata2);
    }
}