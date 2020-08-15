import { DownloadButtonBehavior } from '../behaviors/DownloadButtonBehavior.js';
import { SaveButtonBehavior } from '../behaviors/SaveButtonBehavior.js';

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
            handleClickEvent(event);
        });

        const handleClickEvent = (event) => {
            if (matchesModalWrapper(event)) {
                this.hideModal();
            }
            else if (matchesModalDownloadButton(event)) {                   
                DownloadButtonBehavior.downloadImage(event.target, true);
            }
            else if (matchesModalSaveButton(event)) {
                SaveButtonBehavior.handleSaveState(event.target, true);
            }  
        }

        const matchesModalWrapper = (event) => {
            return event.target.matches('.modal-wrapper');
        }

        const matchesModalDownloadButton = (event) => {
            return event.target.matches('.modal-download-button')||
                   event.target.matches('.modal-download-button span');
        }

        const matchesModalSaveButton = (event) => {
            return event.target.matches('.modal-save-button') || 
                   event.target.matches('.fa-bookmark') ||
                   event.target.matches('.modal-save-button span')
        }
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