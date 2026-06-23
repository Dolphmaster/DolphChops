const decrementButton = document.querySelector("#decrement-btn");
const incrementButton = document.querySelector("#increment-btn");
const quantityAmount = document.querySelector("#quantity-amount");
const applyCouponButton = document.querySelector("#apply-coupon-btn");
const couponCode = document.querySelector("#Coupon-code");
const subTotalInCart = document.querySelector(".subtotal");
const Price = document.querySelector(".price");
const finalSubTotal = document.querySelector("#orderSubTotal");
const cartTotalAmount = document.querySelector("#totalAmount");
const deliveryFee = document.querySelector("#deliveryAmount");
const couponDiscount = document.querySelector("#couponAmount");


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
    calcTotalAmount();
}
function increaseQuantity(){
    let currentQuantity = parseInt(quantityAmount.value, 10);
    if(isNaN(currentQuantity)){
        currentQuantity = 1;
    }
    currentQuantity+= 1;
    quantityAmount.value = currentQuantity;
    updateSubTotal();
    calcTotalAmount();
}
decrementButton.addEventListener('click', decreaseQuantity);
incrementButton.addEventListener('click', increaseQuantity);

function verifyCoupon(){
}
applyCouponButton.addEventListener('click', verifyCoupon);

function updateSubTotal() {
    let currentQuantity = parseInt(quantityAmount.value, 10);
    if (isNaN(currentQuantity)) {
        currentQuantity = 1;
}
       let currentPrice = parseInt(Price.innerText.replace("$", ""), 10);
    let newSubTotal = currentPrice * currentQuantity;

    subTotalInCart.innerText = "$" + newSubTotal;
    finalSubTotal.innerText = "$" + newSubTotal;

    calcTotalAmount();
}

function calcTotalAmount() {    
    let parsedfinalSubTotal = 0;
        parsedfinalSubTotal = parseInt(finalSubTotal.innerText.replace("$", ""), 10);
    if (isNaN(parsedfinalSubTotal)) parsedfinalSubTotal = 0;

    let parsedDeliveryFee = 0.10 * parsedfinalSubTotal;
    if (deliveryFee) {
        deliveryFee.innerText = (0.10 * parsedfinalSubTotal).toFixed(2);
    }
    if (isNaN(parsedDeliveryFee)) parsedDeliveryFee = 0;

    let parsedCouponDiscount = 0;
    if (couponCode && couponCode.innerText) {
        parsedCouponDiscount = parseInt(couponDiscount.innerText.replace("$", ""), 10);
    }
    if (isNaN(parsedCouponDiscount)) parsedCouponDiscount = 0;

    let coupon = couponCode.value;
    if(coupon === "Dolphmaster"){
        parsedCouponDiscount = (0.10 * (parsedfinalSubTotal + parsedDeliveryFee)).toFixed(2);
        couponAmount.innerText = parsedCouponDiscount;
    }
    let grandTotal = ((parsedfinalSubTotal + parsedDeliveryFee) - parsedCouponDiscount).toFixed(2);

        cartTotalAmount.innerText = "$" + grandTotal;
    console.log("Grand Total is:", grandTotal);
}
updateSubTotal();