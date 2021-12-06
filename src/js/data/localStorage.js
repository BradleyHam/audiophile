let cart = [];
if(localStorage.getItem('cartItems')){
    cart = JSON.parse(localStorage.getItem('cartItems'))
}else{
    localStorage.setItem('cartItems', JSON.stringify(cart));
}