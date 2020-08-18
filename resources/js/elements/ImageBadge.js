export class ImageBadge {
    constructor() {
        this.imageBadgeWrapper = document.querySelector('.saved-image-badge-wrapper');
        this.imageBadge = document.querySelector('.saved-image-badge');
    }

    setImageBadge(value) {
        this.imageBadge.innerText = value;
        this.showBadge(value);
    }

    incrementImageBadge() {
        let value = this.imageBadge.innerText;
        value = parseInt(value) + 1
        this.showBadge(value);
        this.imageBadge.innerText = value;
    }

    decrementImageBadge() {
        let value = this.imageBadge.innerText;
        value = parseInt(value) - 1
        this.hideBadge(value);
        setTimeout(()=>(this.imageBadge.innerText = value),100);
    }

    hideBadge(value) {
        if (value == 0) {
            this.imageBadge.classList.remove('show-badge');
        }
    }
    showBadge(value) {
        if (value > 0) {
            this.imageBadge.classList.add('show-badge');
        }
    }
}