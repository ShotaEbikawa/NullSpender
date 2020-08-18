import { UI } from '../elements/UI.js';
import { NavBar } from '../elements/NavBar.js';
import { NavSearchBar } from '../elements/NavSearchBar.js';
import { ImageGrid } from '../elements/ImageGrid.js';
import { NoResultsWrapper } from '../elements/NoResultsWrapper.js';
import { Modal } from '../elements/Modal.js';
import { Utilities } from '../behaviors/Utilities.js';
import { Storage } from '../elements/Storage.js';

const ui = new UI();
const navBar = new NavBar();
const navSearchBar = new NavSearchBar();
const imageGrid = new ImageGrid();
const noResultsWrapper = new NoResultsWrapper();
const modal = new Modal();

window.addEventListener('load', (event) => {
    let queryString = Utilities.parseURL(window.location.href);
    ui.populateQueriedImages(queryString);
    ui.prefillQueries(queryString);
    navBar.assignDelegate();
    navSearchBar.assignDelegate();
    imageGrid.assignDelegate();
    modal.assignDelegate();
    noResultsWrapper.assignDelegate();
    Storage.setImageBadge();
});