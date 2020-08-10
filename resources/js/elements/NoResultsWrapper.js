export class NoResultsWrapper {
    constructor() {
        this.noResultsWrapper = document.querySelector('.no-results-wrapper');
    }

    assignDelegate() {
        this.noResultsWrapper.addEventListener('click', (event) => {
            if (event.target.matches('.try-again-button')) {
                let navSearchBar = document.querySelector('.nav-searchbar');
                navSearchBar.focus();
            }
        })
    }
}