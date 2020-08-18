export const Utilities = (() => {
    const parseURL = (url) => {
        let urlObj = new URL(url);
        let params = new URLSearchParams(urlObj.search);
        return params.get('query');
    }
    const focusNavSearchBar = () => {
        let navSearchBarList = document.querySelectorAll('.nav-searchbar');
        let navSearchBarLarge = navSearchBarList[0];
        let navSearchBarSmall = navSearchBarList[1];
        if (window.innerWidth >= 516) navSearchBarLarge.focus();
        else navSearchBarSmall.focus();
    }
    return {
        parseURL,
        focusNavSearchBar,
    }
})();