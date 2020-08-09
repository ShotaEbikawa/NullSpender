export class NavBar {
    
    constructor() {
        this.navBar = document.querySelector('.navbar');
    }
    
    assignDelegate() {
        this.navBar.addEventListener('click', (event) => {
            console.log(event.target)
            if (event.target.matches('.logo') ||
                event.target.matches('.logo span') ||
                event.target.matches('.logo h1')) {
                console.log('activated')
                window.location.href = '/';
            }
            else if (event.target.matches('.saved-image-button') ||
                    event.target.matches('.saved-image-button i')) {
                window.location.href="./saved-images.html";
            }
        })
    }
}