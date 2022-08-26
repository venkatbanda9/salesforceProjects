import { LightningElement } from 'lwc';

export default class ForEachLoopComponent extends LightningElement {

    CEOList;
    showListHandler(){
        this.CEOList=[
            {
                id: 1,
                name1: 'Venkat'
            },
            {
                id: 2,
                name1: 'Sai'
            },
            {
                id: 3,
                name1: 'Banda'
            }
            
            
        ]
    }
}