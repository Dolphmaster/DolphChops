const decrementButton = document.querySelector("#decrement-btn");
const incrementButton = document.querySelector("#increment-btn");
const quantityAmount = document.querySelector("#quantity-amount");
const applyCouponButton = document.querySelector("#apply-coupon-btn");
const couponCode = document.querySelector("#Coupon-code");
const subTotalInCart = document.querySelector(".subtotal");
const Price = document.querySelector(".price");

function decreaseQuantity(){
    let currentQuantity = parseInt(quantityAmount.value, 10);
    if(isNaN(currentQuantity)){
        currentQuantity = 1;
    }
    if(currentQuantity > 1){
        currentQuantity-= 1;
        quantityAmount.value = currentQuantity;
    }
    updateSubTotal();
}
function increaseQuantity(){
    let currentQuantity = parseInt(quantityAmount.value, 10);
    if(isNaN(currentQuantity)){
        currentQuantity = 1;
    }
    currentQuantity+= 1;
    quantityAmount.value = currentQuantity;
    updateSubTotal();
}
decrementButton.addEventListener('click', decreaseQuantity);
incrementButton.addEventListener('click', increaseQuantity);

function verifyCoupon(){
    let coupon = couponCode.value;
    if(coupon.length < 5){
        //alert("This is Dolphmaster");  
    }
}
applyCouponButton.addEventListener('click', verifyCoupon);


const updateSubTotal = () =>{
    let currentQuantity = parseInt(quantityAmount.value, 10);
    if(isNaN(currentQuantity)){
        currentQuantity = 1;
    }
    let currentPrice = parseInt(Price.innerText.replace("$", ""), 10);

    let newSubTotal =currentPrice * currentQuantity;
    subTotalInCart.innerText = "$" + newSubTotal;

}
updateSubTotal();

/*const greet = () => {
    return 'hello, world';
};
const greeting = greet();
console.log(greeting);*/

const bill = (products, tax) =>{
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};
const output = bill([10,15,20,25], 0.2);
console.log(output);