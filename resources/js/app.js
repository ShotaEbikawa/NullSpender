import { UI } from './UI.js';
import { NavBar } from './NavBar.js';
import { BannerSearchBar } from './BannerSearchBar.js';
import { Modal } from './Modal.js';
import { NavSearchBar } from './NavSearchBar.js';
import { ImageGrid } from './ImageGrid.js';

let ui = new UI();
const navBar = new NavBar();
let navSearchBar = new NavSearchBar();
let bannerSearchBar = new BannerSearchBar();
let imageGrid = new ImageGrid();
let modal = new Modal();

window.addEventListener('load', (event) => {
    ui.populatePopularImages().then( () => {
        navBar.assignDelegate();
        navSearchBar.assignDelegate();
        bannerSearchBar.assignDelegate();
        imageGrid.assignDelegate();
        modal.assignDelegate();
    })
})