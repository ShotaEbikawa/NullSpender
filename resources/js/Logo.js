export class Logo {
    assignDelegate() {
        let logo = document.querySelector('.logo');
        logo.addEventListener('click', (event) => {
            window.location.href = '/';
        })
    }
}