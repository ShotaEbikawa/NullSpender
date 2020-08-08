export class Logo {
    constructor() {
        this.logo = document.querySelector('.logo');
    }
    assignDelegate() {
        this.logo.addEventListener('click', (event) => {
            window.location.href = '/';
        })
    }
}