let specialButtons = document.querySelectorAll('#special-dishes button');
let cartQuantity = document.querySelector('#cart-quantity');

let initialCartQuantity = 0;
function updateCartQuantity() {
    initialCartQuantity+= 1;
    cartQuantity.innerText = initialCartQuantity;
}
 specialButtons.forEach(button => {
        button.addEventListener('click', updateCartQuantity);
    }); 







