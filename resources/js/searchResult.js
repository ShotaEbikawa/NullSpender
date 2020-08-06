import { UI } from './UI.js';
import { Logo } from './Logo.js';
import { NavSearchBar } from './NavSearchBar.js';
import { ImageGrid } from './ImageGrid.js';
import { parseURL } from './HelperFunctions.js';

const ui = new UI();
const logo = new Logo();
const navSearchBar = new NavSearchBar();
const imageGrid = new ImageGrid();

window.addEventListener('load', (event) => {
    let queryString = parseURL(window.location.href);
    document.querySelector('.query-string').innerText = queryString;
    ui.getQueriedImages(queryString);
    logo.assignDelegate();
    navSearchBar.assignDelegate();
    imageGrid.assignDelegate();
})