import items from '../../data/item-data';
import { addNoItemSpan} from './noItems';

const addItemsButton = document.querySelector('.add-to-cart__button');
const cartContainer = document.querySelector('.cart-dropdown__items-container');
const cartItemsQuantity = document.querySelector('#items-quantity');
const totalElement = document.querySelector('.cart-dropdown__total-row div');

populateCartFromLocalStorage();
cartCounter();

addItemsButton && addItemsButton.addEventListener('click', () => {

    const itemQuantity = +document.querySelector('.product-single .add-to-cart__qauntity').textContent;
    const itemType = addItemsButton.dataset.type;
    const item = items[itemType];
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let cartItem = cartContainer.querySelector(`#${itemType}`);

    if(cartItem){
        let cartItemQuantity = cartItem.querySelector('.add-to-cart__qauntity');
        cartItemQuantity.textContent = +cartItemQuantity.textContent + itemQuantity;
        updateCartData(item, itemQuantity, cartItems);
        cartCounter();
    }else{
        createNewCartItemElement(item, itemQuantity);
        updateCartData(item, itemQuantity, cartItems);
        attachCounterFunctionality(cartItems, item);
        cartCounter();
    }
    addNoItemSpan();
});

function updateCartData(item, itemQuantity, cartItems){
    for(let i = itemQuantity; i > 0; i--){
        cartItems.push(item)
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

function createNewCartItemElement(item, itemQuantity){
    console.log(item)
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.setAttribute('id', item.identifier);
    cartItemElement.innerHTML = ` 
    <div class="cart-item__image cart-item__image--${item.identifier}"></div>
        <div class="cart-item__details">
            <h6 class='cart-item__type'>${item.title}</h6>
            <span class='cart-item__price'>$ ${item.price}</span>
        </div>
        <div class="cart-item__quantity">
        <div class="add-to-cart__quantity-select">
            <button add-item class='add-to-cart__remove'>
                -
            </button> 
              <div class='add-to-cart__qauntity'>${itemQuantity}</div>
            <button subtract-item class='add-to-cart__add'>
                +
            </button>
        </div>
    </div>
   `
   cartContainer.appendChild(cartItemElement);
}

function attachCounterFunctionality(item, cartItems){
    const lastQauntitySelectElement = cartContainer.querySelector('.cart-item:last-of-type .add-to-cart__quantity-select');
    AddAndRemoveCartItems(lastQauntitySelectElement, item, cartItems);
}

function AddAndRemoveCartItems(component){
    component.addEventListener('click', (e) => {
        let removeItem = component.querySelector('.add-to-cart__remove');
        let addItem = component.querySelector('.add-to-cart__add');
        let itemQuantity = component.querySelector('.add-to-cart__qauntity');
        let quantity = +itemQuantity.textContent;
        const itemId = e.target.parentElement.parentElement.parentElement.id;

        if(e.target == removeItem && quantity > 0){
            itemQuantity.textContent = quantity - 1;
            removeItemFromCart(itemId);
            cartCounter();
        }
        if(e.target == addItem){
            itemQuantity.textContent = quantity + 1;
            addItemToCart(itemId);
            cartCounter();
        }
}) 
}

function removeItemFromCart(itemId){
   let cartItems = JSON.parse(localStorage.getItem('cartItems'));   
   let indexOfItemToRemove = (cartItems.indexOf(cartItems.find(cartItem => cartItem.identifier == itemId)));
   if(indexOfItemToRemove !== -1){
        cartItems.splice(indexOfItemToRemove, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
   }
}
function addItemToCart(itemId){
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    cartItems.push(items[itemId]);
    console.log(itemId)
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
function populateCartFromLocalStorage(){
    let localStorageItems = JSON.parse(localStorage.getItem('cartItems'));
    localStorageItems && localStorageItems.forEach(item => {
        if(cartContainer.querySelector(`#${item.identifier}`)){
            let itemQuantityElement = cartContainer.querySelector(`#${item.identifier} .add-to-cart__qauntity`)
            itemQuantityElement.textContent = +itemQuantityElement.textContent + 1;
        }else{
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.setAttribute('id', item.identifier);
        cartItemElement.innerHTML = ` 
        <div class="cart-item__image cart-item__image--${item.identifier}"></div>
            <div class="cart-item__details">
                <h6 class='cart-item__type'>${item.title}</h6>
                <span class='cart-item__price'>$ ${item.price}</span>
            </div>
            <div class="cart-item__quantity">
            <div class="add-to-cart__quantity-select">
                <button add-item class='add-to-cart__remove'>
                    -
                </button> 
                  <div class='add-to-cart__qauntity'>1</div>
                <button subtract-item class='add-to-cart__add'>
                    +
                </button>
            </div>
        </div>
       `
       cartContainer.appendChild(cartItemElement);

       const lastQauntitySelectElement = cartItemElement.querySelector('.add-to-cart__quantity-select');
       AddAndRemoveCartItems(lastQauntitySelectElement);
        }
    })
}

function cartCounter(){
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let cartItemsLength = cartItems.length;
    cartItemsQuantity.textContent = cartItemsLength;
    
    let cartItemsTotal = cartItems.reduce((acc, cur) => {
        let curNum =  cur.price.replace(/,/g, "");
        return acc += +curNum;
    }, 0);

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      
      let cartItemsTotalString = formatter.format(cartItemsTotal);

   // let cartItemsTotalString = `$ ${cartItemsTotal.toString()}`

    totalElement.textContent = cartItemsTotalString;
}