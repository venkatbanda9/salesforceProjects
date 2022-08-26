import { api, LightningElement } from 'lwc';

export default class Childcomponent2 extends LightningElement {
    @api mdata1="simple data 1";
    @api mdata2="simple data 2";

    fireHandler(event){
        const evnt = new CustomEvent('myfireevent',{
            detail:
            {
                mdata1: this.mdata1,
                mdata2: this.mdata2
            }
        });
        this.dispatchEvent(evnt);
    }
}