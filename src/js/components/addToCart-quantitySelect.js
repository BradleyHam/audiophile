let addItem = document.querySelector('.add-to-cart__add');
let removeItem = document.querySelector('.add-to-cart__remove');
let itemQuantity = document.querySelector('.add-to-cart__qauntity');
let qauntitySelect = document.querySelector('.add-to-cart__quantity-select');

qauntitySelect.addEventListener('click', (e) => {
    let quantity = +itemQuantity.textContent;
    if(e.target == removeItem && quantity > 0){
        itemQuantity.textContent = quantity - 1;
    }else if(e.target == removeItem && quantity == 0){
        return;
    }
    else{
        itemQuantity.textContent = quantity + 1;
    }
})

