let cartContainer = document.querySelector('.cart-dropdown__items-container');
let removeAll = document.querySelector('.cart-dropdown__remove-all');

removeAll.addEventListener('click', () => {
    cartContainer.innerHTML = '';
    localStorage.setItem('cartItems', '[]')
})