export class BannerSearchBar {
    constructor() {
        this.bannerSearchBar = document.querySelector('.banner-searchbar');
    }
    assignDelegate() {
        this.bannerSearchBar.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                let query = event.target.value;
                let productionUrl = `./search-result?query=${query}`
                let developmentUrl = `./search-result.html?query=${query}`
                window.location.href = developmentUrl;
            }
        })
    }
}