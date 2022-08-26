import { LightningElement } from 'lwc';

export default class TimeCounterCard extends LightningElement {
    showStartButton = true;
    timeVal = '00 : 00 : 00 : 00';
    timeIntervalInstance;
    totalMilliseconds = 0;

    startTimerHandler(event){
        this.showStartButton = false;
        var parentThis = this;
        this.timeIntervalInstance = setInterval(function() {

            var hours = Math.floor ( (parentThis.totalMilliseconds % (1000*60*60*24))/ (1000*60*60));
            
            var minutes = Math. floor ( (parentThis.totalMilliseconds % (1000*60*60))/ (1000*60));
            var seconds = Math.floor ( (parentThis.totalMilliseconds % (1000 *60))/ (1000));
            var milliseconds = Math.floor( (parentThis.totalMilliseconds % (1000)));
            parentThis.timeVal = hours +" : "+ minutes+" : "+seconds+" : "+milliseconds;
            parentThis.totalMilliseconds += 100;
        }, 100);
    }
    stopTimerHandler(event){
        this.showStartButton = false;
        clearInterval(this.timeIntervalInstance);
    }
    resetTimeHandler(event){
        this.showStartButton = true;
        clearInterval(this.timeIntervalInstance);
        this.timeVal = '00 : 00 : 00 : 00';
        this.totalMilliseconds = 0;
    }
}