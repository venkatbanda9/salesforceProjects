import { LightningElement } from 'lwc';
import imgref from '@salesforce/resourceUrl/moster_img';

export default class StaticResourceComponent extends LightningElement {
    img = imgref;
}