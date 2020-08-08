import { getCertainImage } from './ImageAPI.js';

export class Storage {
    static addImage(id) {
        getCertainImage(id).then((image) => {
            let savedImages = JSON.parse(localStorage.getItem('savedImages'));
            if (savedImages === null) { savedImages = []; }
            savedImages.push(image);
            localStorage.setItem('savedImages', JSON.stringify(savedImages));
        })
    }

    static removeImage(id) {
        let savedImages = JSON.parse(localStorage.getItem('savedImages'));
        let newSavedImages = savedImages.filter((savedImage) => savedImage.id !== id);
        localStorage.setItem('savedImages', JSON.stringify(newSavedImages));
    }
}