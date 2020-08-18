import { UI } from '../elements/UI.js';
import { NavBar } from '../elements/NavBar.js';
import { NavSearchBar } from '../elements/NavSearchBar.js';
import { ImageGrid } from '../elements/ImageGrid.js';
import { NoSavedImage } from '../elements/NoSavedImage.js';
import { Storage } from '../elements/Storage.js'
import { Modal } from '../elements/Modal.js';

const ui = new UI();
const navBar = new NavBar();
const navSearchBar = new NavSearchBar();
const imageGrid = new ImageGrid();
const noSavedImage = new NoSavedImage();
const modal = new Modal();

window.addEventListener('load', (event) => {
    ui.populateSavedImages();
    navBar.assignDelegate();
    navSearchBar.assignDelegate();
    imageGrid.assignDelegate();
    noSavedImage.assignDelegate();
    modal.assignDelegate();
    Storage.setImageBadge();
})