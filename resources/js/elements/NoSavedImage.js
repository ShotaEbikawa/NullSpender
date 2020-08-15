import { Utilities } from '../behaviors/Utilities';
export class NoSavedImage {
    constructor() {
        this.noSavedWrapper = document.querySelector('.no-saved-wrapper');
    }

    assignDelegate() {
        this.noSavedWrapper.addEventListener('click', (event) => {
            handleClickEvent(event);
        });

        const handleClickEvent = (event) => {
            if (event.target.matches('.try-again-button')) {
                Utilities.focusNavSearchBar();
            }
        }
    }    
}