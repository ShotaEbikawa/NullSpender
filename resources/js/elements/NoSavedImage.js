export class NoSavedImage {
    constructor() {
        this.noSavedWrapper = document.querySelector('.no-saved-wrapper');
    }

    assignDelegate() {
        this.noSavedWrapper.addEventListener('click', (event) => {
            if (event.target.matches('.try-again-button')) {
                let navSearchBar = document.querySelector('.nav-searchbar');
                navSearchBar.focus();
            }
        })
    }    
}