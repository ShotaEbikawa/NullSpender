import { DownloadButtonBehavior } from './DownloadButtonBehavior.js';
import { SaveButtonBehavior } from './SaveButtonBehavior.js';

export class Modal {
    constructor() {
        this.modalWrapper = document.querySelector('.modal-wrapper');
        this.modal = document.querySelector('.modal');
        this.image = document.querySelector('.modal img');
        this.downloadButton = document.querySelector('.modal-download-button');
        this.saveButton = document.querySelector('.modal-save-button');
        this.body = document.querySelector('body');
    }

    assignDelegate() {
        this.modalWrapper.addEventListener('click', (event) => {
            if (event.target.matches('.modal')) {}
            else if (event.target.matches('.modal-wrapper')) {
                this.hideModal();
            }
            else if (event.target.matches('.modal-download-button')||
                    event.target.matches('.modal-download-button span')) {                    
                    DownloadButtonBehavior.downloadImage(event.target, true);
            }
            else if (event.target.matches('.modal-save-button') || 
                    event.target.matches('.fa-bookmark') ||
                    event.target.matches('.modal-save-button span')) {
                    SaveButtonBehavior.handleSaveState(event.target, true);
            }
        })
    }

    displayModal(previewImageUrl, downloadImageUrl, imageID) {
        this.body.classList.add('no-scroll');
        this.image.src = previewImageUrl;
        this.downloadButton.setAttribute('data-href', downloadImageUrl);
        this.downloadButton.setAttribute('data-id', imageID);
        this.saveButton.setAttribute('data-id', imageID);
        SaveButtonBehavior.manageModalSaveButton(imageID);
        this.modalWrapper.classList.add('appear');
    }

    hideModal() {
        let id = this.saveButton.getAttribute('data-id')
        this.body.classList.remove('no-scroll');
        this.image.src = '';
        this.downloadButton.setAttribute('data-href', '');
        SaveButtonBehavior.manageSaveButton(id);
        this.modalWrapper.classList.remove('appear');
    }
}