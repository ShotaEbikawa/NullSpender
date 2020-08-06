export class NavSearchBar {
    assignDelegate() {
        let searchNavBar = document.querySelector('.nav-searchbar');
        searchNavBar.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                let query = event.target.value;
                window.location.href = `/search-result.html?query=${query}`;
            }
        })
    }
}