let imgGridListWrapper = document.querySelector('.image-grid-list');
let searchNavBar = document.querySelector('.nav-searchbar');
let searchBannerBar = document.querySelector('.banner-searchbar');
let imgGridList = [];

class SearchBar {
    assignDelegate() {
        searchNavBar.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                console.log('query sent to the server');
            }
        })

        searchBannerBar.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                console.log('query sent to the server');
                let query = event.target.value;
                window.location.href = `/search-result.html?query=${query}`;
            }
        })
    }
}


class ImageGrid {
    assignDelegate() {
        imgGridListWrapper.addEventListener('click', (event) => {
            if (event.target.matches('.like-button') || 
                event.target.matches('.fa-heart') ||
                event.target.matches('.like-button span')
            ) {
                let likeButtonDOM = this.getLikeButtonDOM(event.target);
                let numLikes = likeButtonDOM.querySelector('span');
                this.addOrMinusLikes(likeButtonDOM, numLikes)
            }
            if (event.target.matches('.download-button')||
                event.target.matches('.download-button span')) {
                this.downloadImage(event.target);
                // unsplash.photos.downloadPhoto(image);
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
        //unsplash.photos.downloadPhoto(image);
    }


    getDownloadButtonDOM(el) {
        if (!el.classList.contains('download-button')) {
            return el.parentElement;
        }
        return el.parentElement;
    }

    getLikeButtonDOM(el) {
        if (el.classList.contains('like-button')) return el;
        else return el.parentElement;
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
}

/* 
    • we will want to fetch the result
        - let images = await fetch('http://localhost:3000/getPopularImages')
*/
class UI {
    async getPopularImages() {
        let images = await fetch('http://localhost:3000/getPopularImages');
        let imageList = await images.json();
        console.log(imageList)
        imageList.forEach((image) => {
            imgGridListWrapper.innerHTML += this.createGrid(image);
        })
        // creating new grid should be in a new function
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


class Storage {
    storeGridImages() {
        let imgGrids = Array.from(imgGridListWrapper.children);
        imgGrids.forEach((grid) => {imgGridList.push(grid)});
    }
}

let ui = new UI();
let storage = new Storage();
let searchBar = new SearchBar();
let imageGrid = new ImageGrid();
window.addEventListener('load', (event) => {
    ui.getPopularImages().then( () => {
        storage.storeGridImages();
        searchBar.assignDelegate();
        imageGrid.assignDelegate();
    })
})