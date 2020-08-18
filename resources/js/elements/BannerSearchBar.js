export class BannerSearchBar {
    constructor() {
        this.bannerSearchBar = document.querySelector('.banner-searchbar');
    }
    assignDelegate() {
        this.bannerSearchBar.addEventListener('keyup', (event) => {
            handleKeyUpEvent(event);
        });

        const handleKeyUpEvent = (event) => {
            if (event.keyCode === 13) {
                getQueryResults(event);
            }
        };

        const getQueryResults = (event) => {
            let query = event.target.value;
            let productionUrl = `./search-result?query=${query}`
            let developmentUrl = `./search-result.html?query=${query}`
            window.location.href = productionUrl;
        };
    }
}