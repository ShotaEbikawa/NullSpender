export class NavSearchBar {
    constructor() {
        this.searchNavBar = document.querySelector('.nav-searchbar');
    }
    assignDelegate() {
        this.searchNavBar.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                let query = event.target.value;
                window.location.href = `/search-result.html?query=${query}`;
            }
        })
    }
}