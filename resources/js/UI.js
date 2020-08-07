import { ImageAPI } from './ImageAPI.js';

const imageAPI = new ImageAPI();

export class UI {
    
    async populatePopularImages() {
        let imgGridListWrapper = document.querySelector('.image-grid-list');
        let imageList = await imageAPI.getPopularImages();
        imageList.forEach((image) => {
            imgGridListWrapper.innerHTML += this.createGrid(image);
        })
    }

    async populateQueriedImages(query) {
        let imgGridListWrapper = document.querySelector('.image-grid-list');
        let imageList = await imageAPI.getQueriedImages(query);
        console.log(imageList)
        imageList.forEach((image) => {
            imgGridListWrapper.innerHTML += this.createGrid(image);
        })
    }

    createGrid(image) {
        let grid = document.createDocumentFragment().innerHTML = `
            <div class="image-grid" data-id=${image.id}>
                <img src="${image.urls.small}">
                <button 
                    class="download-button"
                    data-href="${image.urls.raw}"
                    data-id=${image.id}
                >
                    <span>Download Image</span>
                </button>
                <button class="save-button">
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