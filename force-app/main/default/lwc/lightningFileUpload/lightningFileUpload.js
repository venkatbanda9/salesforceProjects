import { LightningElement, api } from 'lwc';
import {showToastEvent} from 'lightning/platformShowToastEvent';

export default class LightningFileUpload extends LightningElement {

    @api recordId;

    get acceptedFormats() {
        return ['.pdf','.png','.jpg'];
    }
    handleUploadFinished(event){
        const uploadedFiles = event.detail.files;
        let uploadedFileNames = '';

        for (let i = 0; i < uploadedFiles.length; i++) {
            uploadedFileNames += uploadedFiles[i].name + ', ';
            
        }
        this.dispatchEvent(
            new showToastEvent({
                title: 'Success',
                message: uploadedFiles.length + ' Files uploaded successfully: ' + uploadedFileNames,
                variant: 'success'
            }),
        );
    }
}