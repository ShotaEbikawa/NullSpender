export class BannerSearchBar {
    assignDelegate() {
        let searchBannerBar = document.querySelector('.banner-searchbar');
        searchBannerBar.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                let query = event.target.value;
                window.location.href = `/search-result.html?query=${query}`;
            }
        })
    }
}