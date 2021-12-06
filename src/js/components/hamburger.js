const hamburger = document.querySelector('.hamburger');
const topNav = document.querySelector('.top-nav');
const navDropdown = document.querySelector('.nav-dropdown');
const modalBackdrop = document.querySelector('.modal-backdrop');
const cartDropdown = document.querySelector('.cart-dropdown');

hamburger.addEventListener('click', toggleNavigation);

function toggleNavigation(e){
    if(hamburger.classList.contains('active')){
        removeActiveClasses()
    }else{
        addActiveClasses()
    }
}

function addActiveClasses(){
    if(cartDropdown && cartDropdown.classList.contains('display')){
        cartDropdown.classList.remove('display')
    }
    hamburger.classList.add('active');
    navDropdown.classList.add('active');
    modalBackdrop.classList.add('display');
}
function removeActiveClasses(){
    hamburger.classList.remove('active');
    modalBackdrop.classList.remove('display');
    navDropdown.classList.remove('active');
}