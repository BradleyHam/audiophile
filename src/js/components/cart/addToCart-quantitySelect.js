let qauntitySelectElements = document.querySelectorAll('.add-to-cart__quantity-select');
let quantitySelectComponents = Array.from(qauntitySelectElements);

export function quantitySelect(component){
        component.addEventListener('click', (e) => {
            let removeItem = component.querySelector('.add-to-cart__remove');
            let itemQuantity = component.querySelector('.add-to-cart__qauntity');
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
}

quantitySelectComponents.forEach(quantitySelect)
