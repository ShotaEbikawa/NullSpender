import { UI } from './UI.js';
import { Logo } from './Logo.js';
import { NavSearchBar } from './NavSearchBar.js';
import { ImageGrid } from './ImageGrid.js';
import { Modal } from './Modal.js';
import { parseURL } from './HelperFunctions.js';

const ui = new UI();
const logo = new Logo();
const navSearchBar = new NavSearchBar();
const imageGrid = new ImageGrid();
const modal = new Modal();

window.addEventListener('load', (event) => {
    let queryString = parseURL(window.location.href);
    ui.populateQueriedImages(queryString);
    ui.prefillQueries(queryString);
    logo.assignDelegate();
    navSearchBar.assignDelegate();
    imageGrid.assignDelegate();
    modal.assignDelegate();
});