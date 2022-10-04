

const prize1 = document.getElementById('prize1');
const prize2 = document.getElementById('prize2');
const addCart = document.getElementById('addToCart');
const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById("plusButton");
const quantityInput = document.querySelector('.cart-input');
const addToCart = document.querySelector('#addToCart');
const cartIcon = document.getElementById('cartIcon');
const cartEmpty = document.querySelector('.cart-Empty');
const cartFull = document.querySelector('.cart-full');




//PRIZE

let prize = 250.00

const calcPercent = function calcPercent(prize, percent){
    return ((percent *prize)/100)
};


prize1.innerText= '$ ' + calcPercent(250.00,50) + '.00';
prize2.innerText= '$' + prize + '.00';

// CART

//get the object, quantity and prize
const sneakers = {
  id:"01",
  name:"Autum Limited Edition...",
  prize:calcPercent(250.00,50),
  amount: 0,
  image:"image-product1-thumbnail.jpg"
};

quantityInput.value =Number(sneakers.amount)
let prizes = ((sneakers.prize)*(quantityInput.value));

// minus button 

minusButton.addEventListener('click', minusButtonClicked);

function minusButtonClicked(event){
    const button = event.target;
    quantityInput.value = --sneakers.amount;
   const  prizeDown = ((sneakers.prize)*(quantityInput.value));
   
    quantityInput.value < 0 ? (quantityInput.value = ++sneakers.amount) : null
};

// plus button 

plusButton.addEventListener('click', plusButtonClicked);

function plusButtonClicked(event){
    const plusButtonClicked = event.target;
    quantityInput.value = ++sneakers.amount;
    const prizeUp = ((sneakers.prize)*(quantityInput.value));

   
minusButtonClicked

};



addToCart.addEventListener('click', addToCartClicked);

function addToCartClicked(event){
 const buttonClicked = event.target;
console.log(quantityInput.value)

}
addToCartClicked;

/*
    cartIcon.addEventListener("click", cartIconClicked)
   
     function cartIconClicked(event){
    buttonCart = event.target;
    console.log("hola");
     cartEmpty.style.display = "block";
     }

*/
// CART EMPTY
$(document).ready(function(){


$("#cartIcon").click(function(){
  console.log("ra")
  $(".cart-Empty").toggle();
});

});

//CART FULL


const shoppingCartRow = document.createElement('div');
const shoppingCartContent =

 `<div class="row shoppingCartItem" data-id=${sneakers.name}>
<div class="col-6">
    <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
        <img src="./images/image-product-1-thumbnail.jpg" class="shopping-cart-image">
        <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${sneakers.name}</h6>
    </div>
</div>
<div class="col-2">
    <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
        <p class="item-price mb-0 shoppingCartItemPrice">${sneakers.prize}</p>
    </div>
    <div class="shopping-cart-amount d-flex align-items-center h-100 border-bottom pb-2 pt-3">
        <p class="item-amount mb-0 shoppingCartItemAmount">${sneakers.amount}</p>
    </div>
</div>
<div class="col-4">
    <div>
        <button class= "delete" type="button"><img src="./images/icon-delete.svg" class="shopping-cart-image"></button>
    </div>
</div>
     <div> <button id="addToCart">Checkout</button>
</div>`;
console.log("🚀 ~ file: index.js ~ line 121 ~ shoppingCartContent ", shoppingCartContent )

shoppingCartRow.innerHTML = shoppingCartContent;
cartFull.append(shoppingCartRow);









