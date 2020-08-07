export class Modal {
    constructor() {
        this.modalWrapper = document.querySelector('.modal-wrapper');
        this.modal = document.querySelector('.modal');
    }

    assignDelegate() {
        this.modalWrapper.addEventListener('click', (event) => {
            if (event.target.matches('.modal')) {}
            else if (event.target.matches('.modal-wrapper')) {
                this.hideModal();
            }
        })
    }

    displayModal() {
        let body = document.querySelector('body');
        body.classList.add('no-scroll');
        this.modalWrapper.classList.add('appear');
    }

    hideModal() {
        let body = document.querySelector('body');
        body.classList.remove('no-scroll');
        this.modalWrapper.classList.remove('appear');
    }

}