let cart = document.querySelector('.cart');
let cartDropdown = document.querySelector('.cart-dropdown');
let addToCart = document.querySelector('.add-to-cart__button');
let modalBackdrop = document.querySelector('.modal-backdrop');
const navDropdown = document.querySelector('.nav-dropdown');
const hamburger = document.querySelector('.hamburger');

    cart.addEventListener('click', () => {
  
        navDropdown.classList.remove('active');
        hamburger.classList.remove('active');
       
        if(cartDropdown.classList.contains('display')){
            cartDropdown.classList.remove('display');
            modalBackdrop.classList.remove('display');
        }else{
            cartDropdown.classList.add('display');
            modalBackdrop.classList.add('display');
        }
    });
    
    addToCart && addToCart.addEventListener('click', () => {
        cartDropdown.classList.add('display');
        modalBackdrop.classList.add('display');
    });

    