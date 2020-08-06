export class ImageGrid {
    assignDelegate() {
        let imgGridListWrapper = document.querySelector('.image-grid-list');
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
        if (!el.classList.contains('download-button')) {
            return el.parentElement;
        }
        return el;
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