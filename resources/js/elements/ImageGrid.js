import { DownloadButtonBehavior } from '../behaviors/DownloadButtonBehavior.js';
import { SaveButtonBehavior } from '../behaviors/SaveButtonBehavior.js'; 
import { Modal } from './Modal.js';

const modal = new Modal();

export class ImageGrid {
    constructor() {
        this.imgGridListWrapper = document.querySelector('.image-grid-list');
    }
    assignDelegate() {
        this.imgGridListWrapper.addEventListener('click', (event) => {
            if (event.target.matches('.save-button') || 
                event.target.matches('.fa-bookmark') ||
                event.target.matches('.save-button span')
            ) {
                SaveButtonBehavior.handleSaveState(event.target,false);
            }
            else if (event.target.matches('.download-button')||
                event.target.matches('.download-button span')) {
                DownloadButtonBehavior.downloadImage(event.target, false);
            }
            else if (event.target.matches('.image-grid-overlay')) {
                let imageGrid = event.target.parentElement;
                let downloadButton = imageGrid.querySelector('.download-button');
                let downloadImageUrl = downloadButton.getAttribute('data-href');
                let previewImageUrl = imageGrid.getAttribute('data-preview');
                let imageID = imageGrid.getAttribute('data-id');
                modal.displayModal(previewImageUrl,downloadImageUrl,imageID);
            }
        })
    }
}