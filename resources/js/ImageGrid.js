import { Storage } from './Storage.js';
import { Modal } from './Modal.js';

const storage = new Storage();
const modal = new Modal();

export class ImageGrid {
    assignDelegate() {
        let imgGridListWrapper = document.querySelector('.image-grid-list');
        imgGridListWrapper.addEventListener('click', (event) => {
            if (event.target.matches('.save-button') || 
                event.target.matches('.fa-bookmark') ||
                event.target.matches('.save-button span')
            ) {
                let saveButtonDOM = this.getSaveButtonDOM(event.target);
                this.handleSaveState(saveButtonDOM);
            }
            else if (event.target.matches('.download-button')||
                event.target.matches('.download-button span')) {
                this.downloadImage(event.target);
            }
            else if (event.target.matches('.image-grid-overlay')) {
                modal.displayModal();
            }
        })
    }

    async downloadImage(el) {
        let downloadButton = this.getDownloadButtonDOM(el);
        let imageLink = downloadButton.getAttribute('data-href');
        console.log(imageLink);
        let response = await fetch(imageLink);
        let blob = await response.blob();
        saveAs(blob, downloadButton.getAttribute('data-id'));
    }


    getDownloadButtonDOM(el) {
        if (el.classList.contains('download-button')) return el;
        else return el.parentElement;
    }

    getSaveButtonDOM(el) {
        if (el.classList.contains('save-button')) return el;
        else return el.parentElement;
    }

    getImageID(el) {
        if (el.classList.contains('save-button') ||
            el.classList.contains('download-button')) {
                return el.parentElement.getAttribute('data-id');
        }
        return el.getAttribute('data-id');
    }

    addOrMinusLikes(likeButtonDOM, numLikes) {
        if (likeButtonDOM.classList.contains('liked')) {
            numLikes.innerText = parseInt(numLikes.innerText) - 1;
            likeButtonDOM.classList.remove('liked');
        } else {
            numLikes.innerText = parseInt(numLikes.innerText) + 1;
            likeButtonDOM.classList.add('liked');
        }
    }

    handleSaveState(saveButtonDOM) {
        let icon = saveButtonDOM.querySelector('.fa-bookmark');
        let span = saveButtonDOM.querySelector('span');
        let id = this.getImageID(saveButtonDOM);
        if (icon.classList.contains('saved')) {
            icon.classList.remove('saved');
            span.innerText = 'Save';
            storage.removeImage(id);
            
        } else {
            icon.classList.add('saved');
            span.innerText = 'Unsave';
            storage.addImage(id);
        }
    }
}