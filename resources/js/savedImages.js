import { UI } from './UI.js';
import { NavBar } from './NavBar.js';
import { NavSearchBar } from './NavSearchBar.js';
import { ImageGrid } from './ImageGrid.js';
import { Modal } from './Modal.js';

const ui = new UI();
const navBar = new NavBar();
const navSearchBar = new NavSearchBar();
const imageGrid = new ImageGrid();
const modal = new Modal();

window.addEventListener('load', (event) => {
    ui.populateSavedImages();
    navBar.assignDelegate();
    navSearchBar.assignDelegate();
    imageGrid.assignDelegate();
    modal.assignDelegate();
})