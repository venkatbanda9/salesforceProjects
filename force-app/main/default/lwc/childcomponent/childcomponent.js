import { api, LightningElement } from 'lwc';

export default class Childcomponent extends LightningElement {
    @api projectcode;
    @api message;
}