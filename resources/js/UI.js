import { ImageAPI} from './ImageAPI.js';
import { SaveButtonBehavior } from './SaveButtonBehavior.js';
import { Storage } from './Storage.js';

export class UI {
    constructor() {
        this.imgGridListWrapper = document.querySelector('.image-grid-list');
    }

    async populatePopularImages() {
        let imageList = await ImageAPI.getPopularImages();
        imageList.forEach((image) => {
            this.imgGridListWrapper.innerHTML += this.createGrid(image);
        })
        this.loadSavedImages();
    }

    async populateQueriedImages(query) {
        let imageList = await ImageAPI.getQueriedImages(query);
        if (imageList.length < 1) {
            document.querySelector('.no-results-wrapper').classList.add('appear');
        }
        imageList.forEach((image) => {
            this.imgGridListWrapper.innerHTML += this.createGrid(image);
        })
        this.loadSavedImages();
    }

    populateSavedImages() {
        let savedImageList = Storage.retrieveSavedImages();
        if (savedImageList !== null) {
            console.log(savedImageList)
            savedImageList.forEach((image) => {
                this.imgGridListWrapper.innerHTML += this.createGrid(image);
            })
            this.loadSavedImages();
        }
    }

    loadSavedImages() {
        let savedImageList = Storage.retrieveSavedImages();
        savedImageList.forEach((image) => {
            let saveButtonDOM = this.imgGridListWrapper.querySelector(`.save-button[data-id="${image.id}"]`);
            saveButtonDOM && SaveButtonBehavior.save(saveButtonDOM);
        })
    }

    createGrid(image) {
        let grid = document.createDocumentFragment().innerHTML = `
            <div class="image-grid" 
                data-id=${image.id} 
                data-preview="${image.urls.regular}"
            >
                <img src="${image.urls.small}">
                <button 
                    class="download-button"
                    data-href="${image.urls.raw}"
                    data-id=${image.id}
                >
                    <span>Download Image</span>
                </button>
                <button 
                    class="save-button"
                    data-id=${image.id}
                >
                <i class="fa fa-bookmark" aria-hidden="true"></i>
                    <span>Save</span>
                </button>
                <div class="image-grid-overlay">
                </div>
            </div>
        `
        return grid;
    }

    prefillQueries(query) {
        let searchNavBar = document.querySelector('.nav-searchbar');
        let queryString = document.querySelector('.query-string');
        searchNavBar.value = query;
    }
}