export class NavBar {
    
    constructor() {
        this.navBar = document.querySelector('.navbar');
        this.savedImageIcon = document.querySelector('.saved-image-button');
    }
    
    assignDelegate() {
        this.navBar.addEventListener('click', (event) => {
            if (event.target.matches('.logo') ||
                event.target.matches('.logo span') ||
                event.target.matches('.logo h1')) {
                window.location.href = './';
            }
            else if (event.target.matches('.saved-image-button') ||
                    event.target.matches('.saved-image-button i') ||
                    event.target.matches('.saved-image-badge')) {
                let productionUrl = './saved-images'
                let developmentUrl = './saved-images.html'
                window.location.href= developmentUrl;
            }
        })
    }
}