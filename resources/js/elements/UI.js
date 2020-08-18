import { ImageAPI} from '../behaviors/ImageAPI.js';
import { SaveButtonBehavior } from '../behaviors/SaveButtonBehavior.js';
import { Storage } from './Storage.js';

export class UI {
    constructor() {
        this.galleryTitle = document.querySelector('.gallery-title');
        this.searchNavBar = document.querySelector('.nav-searchbar');
        this.imgGridListWrapper = document.querySelector('.image-grid-list');
    }

    async populatePopularImages() {
        let imageList = await ImageAPI.getPopularImages();
        this.renderImageGrids(imageList)
    }

    async populateQueriedImages(query) {
        let imageList = await ImageAPI.getQueriedImages(query);
        if (imageList.length < 1) {
            this.displayNoResults();
        } else {
            this.renderImageGrids(imageList);
        }
    }

    populateSavedImages() {
        let savedImageList = Storage.retrieveSavedImages();
        if (savedImageList === null || savedImageList.length < 1) {
            this.displayNoSaved();
        } else {
            this.renderImageGrids(savedImageList);
        }
    }

    loadSavedImages() {
        let savedImageList = Storage.retrieveSavedImages();
        if (savedImageList !== null) {
            savedImageList.forEach((image) => {
                let targetDOM = `.save-button[data-id="${image.id}"]`
                let saveButtonDOM = this.imgGridListWrapper.querySelector(targetDOM);
                saveButtonDOM && SaveButtonBehavior.save(saveButtonDOM);
            })
        }
    }

    displayNoResults() {
        let noResultsWrapper = document.querySelector('.no-results-wrapper');
        let imageLoader = document.querySelector('.image-loader');
        imageLoader.classList.add('display-none');
        noResultsWrapper.classList.add('display-block');
    }

    displayNoSaved() {
        let noSavedWrapper = document.querySelector('.no-saved-wrapper');
        let mainContent = document.querySelector('.main-content');
        let footer = document.querySelector('footer');
        noSavedWrapper.classList.add('display-flex');
        mainContent.classList.add('display-none');
        footer.classList.add('display-none');
    }

    renderImageGrids(imageList) {
        let mainContent = document.querySelector('.main-content');
        let imageLoader = document.querySelector('.image-loader');
        let imageDOMList = []
        imageLoader.classList.add('display-none');
        mainContent.classList.add('reset-height');
        imageList.forEach((image) => {
            imageDOMList.push(this.createGrid(image));
        })
        this.imgGridListWrapper.innerHTML += imageDOMList.join('');
        this.loadSavedImages();
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
        let queryString = document.querySelector('.query-string');
        this.searchNavBar.value = query;
        queryString.innerText = query;
    }
}