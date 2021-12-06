const cart = document.querySelector('.cart');
const cartContainer = document.querySelector('.cart-dropdown__items-container');

cart.addEventListener('click', () => {
    addNoItemSpan();
})

export function addNoItemSpan(){
    if(!cartContainer.querySelector('.cart-item')){
        cartContainer.innerHTML = `<span id='no-items'> No items in cart </span>`
    }else if((cartContainer.querySelector('#no-items'))){
        let noItemsSpan = cartContainer.querySelector('#no-items');
        noItemsSpan.parentElement.removeChild(noItemsSpan)
    };
};