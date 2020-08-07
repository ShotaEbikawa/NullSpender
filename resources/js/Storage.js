import { ImageAPI } from './ImageAPI.js';

const imageAPI = new ImageAPI();

export class Storage {
    addImage(id) {
        imageAPI.getCertainImage(id).then((image) => {
            let savedImages = JSON.parse(localStorage.getItem('savedImages'));
            if (savedImages === null) { savedImages = []; }
            savedImages.push(image);
            localStorage.setItem('savedImages', JSON.stringify(savedImages));
        })
    }

    removeImage(id) {
        let savedImages = JSON.parse(localStorage.getItem('savedImages'));
        let newSavedImages = savedImages.filter((savedImage) => savedImage.id !== id);
        localStorage.setItem('savedImages', JSON.stringify(newSavedImages));
    }
}