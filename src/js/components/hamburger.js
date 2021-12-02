const hamburger = document.querySelector('.hamburger');
const topNav = document.querySelector('.top-nav');
const navDropdown = document.querySelector('.nav-dropdown');
const modalBackdrop = document.querySelector('.modal-backdrop');

hamburger.addEventListener('click', toggleNavigation);

function toggleNavigation(e){
    toggleHamburger(e);
    toggleNav();
    toggleModal();

}
function toggleHamburger(e){
    hamburger.classList.toggle('active');
}
function toggleNav(){
    navDropdown.classList.toggle('active');
}
function toggleModal(){
    modalBackdrop.classList.toggle('display');
}
