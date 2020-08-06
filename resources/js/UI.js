export class UI {
    async getPopularImages() {
        let imgGridListWrapper = document.querySelector('.image-grid-list');
        let images = await fetch('http://localhost:3000/getPopularImages');
        let imageList = await images.json();
        imageList.forEach((image) => {
            imgGridListWrapper.innerHTML += this.createGrid(image);
        })
    }

    async getQueriedImages(query) {
        console.log(query);
        let imgGridListWrapper = document.querySelector('.image-grid-list');
        let url = `http://localhost:3000/searchImages?query=${query}`
        let images = await fetch(url);
        let imageList = await images.json();
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
                <button class="like-button">
                    <i class="fas fa-heart"></i>
                    <span>${image.likes}</span>
                </button>
                <div class="image-grid-overlay">
                </div>
            </div>
        `
        return grid;
    }
}