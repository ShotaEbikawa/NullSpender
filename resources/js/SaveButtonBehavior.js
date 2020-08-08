import { Storage } from './Storage.js';

export const handleSaveState = (el, isModal) => {
    let saveButtonDOM = isModal === true ? 
                        getModalSaveButtonDOM(el) :
                        getSaveButtonDOM(el);
    let icon = saveButtonDOM.querySelector('.fa-bookmark');
    let span = saveButtonDOM.querySelector('span');
    let id = saveButtonDOM.getAttribute('data-id');
    if (icon.classList.contains('saved')) {
        icon.classList.remove('saved');
        span.innerText = 'Save';
        Storage.removeImage(id);
        
    } else {
        icon.classList.add('saved');
        span.innerText = 'Unsave';
        Storage.addImage(id);
    }
}

const getSaveButtonDOM = (el) => {
    if (el.classList.contains('save-button')) return el;
    else return el.parentElement;
}

const getModalSaveButtonDOM = (el) => {
    if (el.classList.contains('modal-save-button')) return el;
    else return el.parentElement;
}