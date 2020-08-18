import { Storage } from '../elements/Storage.js';

export const SaveButtonBehavior = (() => {

    const handleSaveState = (el, isModal) => {
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
    };

    const manageSaveButton = (id) => {
        let targetDOM = `.save-button[data-id="${id}"]`
        let saveButtonDOM = document.querySelector(targetDOM);
        if (isModalSaveButtonSaved()) save(saveButtonDOM);
        else unsave(saveButtonDOM);
        
    }
    
    const manageModalSaveButton = (id) => {
        let targetDOM = `.modal-save-button`
        let modalSaveButton = document.querySelector(targetDOM);
        if (isSaveButtonSaved(id)) save(modalSaveButton);
        else unsave(modalSaveButton);
    }

    const save = (saveButtonDOM) => {
        let iconDOM = saveButtonDOM.querySelector('i');
        let spanDOM = saveButtonDOM.querySelector('span');
        spanDOM.innerText = 'Unsave'
        iconDOM.classList.add('saved');
    }
    
    const getSaveButtonDOM = (el) => {
        if (el.classList.contains('save-button')) return el;
        else return el.parentElement;
    }
    
    const getModalSaveButtonDOM = (el) => {
        if (el.classList.contains('modal-save-button')) return el;
        else return el.parentElement;
    }
    
    const isModalSaveButtonSaved = () => {
        let targetDOM = `.modal-save-button i`
        let modalSaveIconDOM = document.querySelector(targetDOM);
        return modalSaveIconDOM.classList.contains('saved');
    }
    
    const isSaveButtonSaved = (id) => {
        let targetDOM = `.save-button[data-id="${id}"] i`
        let saveButtonIconDOM = document.querySelector(targetDOM);
        return saveButtonIconDOM.classList.contains('saved');
    }
    
    const unsave = (saveButtonDOM) => {
        let iconDOM = saveButtonDOM.querySelector('i');
        let spanDOM = saveButtonDOM.querySelector('span');
        spanDOM.innerText = 'Save';
        iconDOM.classList.remove('saved');
    }

    return {
        handleSaveState,
        manageModalSaveButton,
        manageSaveButton,
        save,
    }
})();
