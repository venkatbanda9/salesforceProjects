import { LightningElement } from 'lwc';

export default class CalculateInterest extends LightningElement {
    loanResult;
    pA;
    dur;
    roi;

    principalHandler(event){
        this.pA = parseInt(event.target.value);
    }
    durationHandler(event){
        this.dur = parseInt(event.target.value);
    }
    roiHandler(event){
        this.roi = parseInt(event.target.value);
    }
    CalculateInterestHandler(){
        this.loanResult = ('Interest AMOUNT is: ' + (this.pA*this.dur*this.roi*0.01));
    }
}