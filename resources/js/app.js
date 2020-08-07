import { UI } from './UI.js';
import { Logo } from './Logo.js';
import { BannerSearchBar } from './BannerSearchBar.js';
import { Modal } from './Modal.js';
import { NavSearchBar } from './NavSearchBar.js';
import { ImageGrid } from './ImageGrid.js';

let ui = new UI();
const logo = new Logo();
let navSearchBar = new NavSearchBar();
let bannerSearchBar = new BannerSearchBar();
let imageGrid = new ImageGrid();
let modal = new Modal();

window.addEventListener('load', (event) => {
    ui.populatePopularImages().then( () => {
        logo.assignDelegate();
        navSearchBar.assignDelegate();
        bannerSearchBar.assignDelegate();
        imageGrid.assignDelegate();
        modal.assignDelegate();
    })
})