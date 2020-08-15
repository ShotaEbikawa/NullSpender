export class NavBar {
    
    constructor() {
        this.navBar = document.querySelector('.navbar');
        this.savedImageIcon = document.querySelector('.saved-image-button');
    }
    
    assignDelegate() {
        this.navBar.addEventListener('click', (event) => {
            handleClickEvent(event);
        });

        const handleClickEvent = (event) => {
            if (matchesLogo(event)) {
                window.location.href = './';
            }
            else if (matchesSavedImageButton(event)) {
                let productionUrl = './saved-images'
                let developmentUrl = './saved-images.html'
                window.location.href= productionUrl;
            }
        }

        const matchesLogo = (event) => {
            return event.target.matches('.logo') ||
                   event.target.matches('.logo span') ||
                   event.target.matches('.logo h1');
        }

        const matchesSavedImageButton = (event) => {
            return event.target.matches('.saved-image-button') ||
                   event.target.matches('.saved-image-button i') ||
                   event.target.matches('.saved-image-badge');
        }
    }
}