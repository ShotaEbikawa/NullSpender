export const parseURL = (url) => {
    let urlObj = new URL(url);
    let params = new URLSearchParams(urlObj.search);
    return params.get('query');
}