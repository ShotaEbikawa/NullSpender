import { Utilities } from '../behaviors/Utilities';

export class NoResultsWrapper {
    constructor() {
        this.noResultsWrapper = document.querySelector('.no-results-wrapper');
    }

    assignDelegate() {
        this.noResultsWrapper.addEventListener('click', (event) => {
            handleClickEvent(event);
        })

        const handleClickEvent = (event) => {
            if (event.target.matches('.try-again-button')) {
                Utilities.focusNavSearchBar();
            }
        }
    }
}