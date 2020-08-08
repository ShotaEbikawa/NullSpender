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

export const manageSaveButton = (id) => {
    let saveButtonDOM = document.querySelector(`.save-button[data-id="${id}"`);
    if (isModalSaveButtonSaved()) {
        save(saveButtonDOM);
    } else {
        unsave(saveButtonDOM);
    }
}

export const manageModalSaveButton = (id) => {
    let modalSaveButton = document.querySelector(`.modal-save-button`);
    if (isSaveButtonSaved(id)) {
        save(modalSaveButton);
    } else {
        unsave(modalSaveButton)
    }
}

const isModalSaveButtonSaved = () => {
    let modalSaveIconDOM = document.querySelector('.modal-save-button i');
    return modalSaveIconDOM.classList.contains('saved');
}

const isSaveButtonSaved = (id) => {
    let saveButtonIconDOM = document.querySelector(`.save-button[data-id="${id}"] i`);
    return saveButtonIconDOM.classList.contains('saved');
}

const save = (saveButtonDOM) => {
    let iconDOM = saveButtonDOM.querySelector('i');
    let spanDOM = saveButtonDOM.querySelector('span');
    spanDOM.innerText = 'Unsave'
    iconDOM.classList.add('saved');
}

const unsave = (saveButtonDOM) => {
    let iconDOM = saveButtonDOM.querySelector('i');
    let spanDOM = saveButtonDOM.querySelector('span');
    spanDOM.innerText = 'Save';
    iconDOM.classList.remove('saved');
}