export class NavSearchBar {
    constructor() {
        this.navSearchBars = document.querySelectorAll('.nav-searchbar');
    }
    assignDelegate() {
        this.navSearchBars.forEach((searchBars) => {
            searchBars.addEventListener('keyup', (event) => {
                handleKeyUpEvent(event);
            })
        })

        const handleKeyUpEvent = (event) => {
            if (matchesEnterKey(event)) {
                getQueryResults(event);
            }
        }

        const matchesEnterKey = (event) => {
            return event.keyCode === 13;
        }

        const getQueryResults = (event) => {
            let query = event.target.value;
            let productionUrl = `./search-result?query=${query}`
            let developmentUrl = `./search-result.html?query=${query}`
            window.location.href = productionUrl;
        }
    }
}