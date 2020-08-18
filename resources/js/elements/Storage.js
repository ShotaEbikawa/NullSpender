import { ImageAPI } from '../behaviors/ImageAPI.js';
import { ImageBadge } from './ImageBadge.js';

export const Storage = (() => {
    let imageBadge = new ImageBadge();

    const addImage = (id) => {
        imageBadge.incrementImageBadge();
        ImageAPI.getCertainImage(id).then((image) => {
            let savedImages = JSON.parse(localStorage.getItem('savedImages'));
            if (savedImages === null) savedImages = []; 
            savedImages.push(image);
            localStorage.setItem('savedImages', JSON.stringify(savedImages));
        })
    }

    const removeImage = (id) => {
        imageBadge.decrementImageBadge();
        let savedImages = JSON.parse(localStorage.getItem('savedImages'));
        let newSavedImages = savedImages.filter((savedImage) => savedImage.id !== id);
        localStorage.setItem('savedImages', JSON.stringify(newSavedImages));
    }

    const retrieveSavedImages = () => {
        return JSON.parse(localStorage.getItem('savedImages'));
    }

    const setImageBadge = () => {
        let savedImages = retrieveSavedImages()
        savedImages && imageBadge.setImageBadge(savedImages.length);
    }

    return {
        addImage,
        removeImage,
        retrieveSavedImages,
        setImageBadge,
    }
})();
