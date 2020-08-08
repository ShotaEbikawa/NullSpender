import { getPopularImages, getQueriedImages } from './ImageAPI.js';

export class UI {
    constructor() {
        this.imgGridListWrapper = document.querySelector('.image-grid-list');
    }

    async populatePopularImages() {
        let imageList = await getPopularImages();
        imageList.forEach((image) => {
            this.imgGridListWrapper.innerHTML += this.createGrid(image);
        })
    }

    async populateQueriedImages(query) {
        let imageList = await getQueriedImages(query);
        imageList.forEach((image) => {
            this.imgGridListWrapper.innerHTML += this.createGrid(image);
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
        queryString.innerText = query;
    }
}