export class NavSearchBar {
    constructor() {
        this.navSearchBars = document.querySelectorAll('.nav-searchbar');
    }
    assignDelegate() {
        this.navSearchBars.forEach((searchBars) => {
            searchBars.addEventListener('keyup', (event) => {
                if (event.keyCode === 13) {
                    let query = event.target.value;
                    let productionUrl = `./search-result?query=${query}`
                    let developmentUrl = `./search-result.html?query=${query}`
                    window.location.href = developmentUrl;
                }
            })
        })
    }
}