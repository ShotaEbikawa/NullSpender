import { UI } from '../elements/UI.js';
import { NavBar } from '../elements/NavBar.js';
import { BannerSearchBar } from '../elements/BannerSearchBar.js';
import { Modal } from '../elements/Modal.js';
import { NavSearchBar } from '../elements/NavSearchBar.js';
import { ImageGrid } from '../elements/ImageGrid.js';
import { Storage } from '../elements/Storage.js';

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
        Storage.setImageBadge();
    })

})