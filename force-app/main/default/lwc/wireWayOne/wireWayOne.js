import Account from '@salesforce/schema/Account';
import { LightningElement, wire } from 'lwc';
import getAccountListMethodRef from '@salesforce/apex/AccountHelperClass.getAccountList'
export default class WireWayOne extends LightningElement {
    @wire(getAccountListMethodRef) varAccList;
}