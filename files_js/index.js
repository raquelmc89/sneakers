

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
const cartIconNumber = document.getElementById("cartIconNumber");



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
    const quantity =  quantityInput.value;
    const storageQuantityDown = window.localStorage.setItem('quantity',quantity);
    const  prizeDown = ((sneakers.prize)*(quantityInput.value));
    quantityInput.value < 0 ? (quantityInput.value = ++sneakers.amount) : null
    const storagePrizeDown = window.localStorage.setItem('prize',prizeDown);
    
};

// plus button 

plusButton.addEventListener('click', plusButtonClicked);

function plusButtonClicked(event){
    const plusButtonClicked = event.target;
    quantityInput.value = ++sneakers.amount;
    const quantityUp = quantityInput.value;
    const storageQuantityUp = window.localStorage.setItem('quantity',quantityUp);
    const prizeUp = ((sneakers.prize)*(quantityInput.value));
    const storagePrizeUp = window.localStorage.setItem('prize',prizeUp)
  
minusButtonClicked

}

addToCart.addEventListener('click', addToCartClicked);

function addToCartClicked(event){
    const buttonClicked = event.target;
   cartIconNumber.innerText = quantityInput.value;  
   const itemAmount =  Number(cartIconNumber.innerText);
   itemAmount
   
}
  
addToCartClicked;

cartIcon.addEventListener("click", cartIconClicked)

function cartIconClicked(event){
    const buttonClicked = event.target

    if(cartIconNumber.innerText == 0)
    {
        $(document).ready(function(){

            $("#cartIcon").click(function(){
              $(".cart-Empty").toggle();
            });
            
            });
     } else {
       /* $(document).ready(function(){

            $("#cartIcon").click(function(){
              $(".cart-full").toggle();
            });
            
            });*/

            const quantityFromStorage= localStorage.getItem('quantity');
    const prizeFromStorage = localStorage.getItem('prize');
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `<div class="row" data-id=${sneakers.name}>
   <div class="cart col">
      <div class="col">
        <div class="cart-img">
             <img id="imgCart" src="./images/image-product-1-thumbnail.jpg" class="shopping-cart-image">
        </div>
      </div>
      <div class="cart-item row">
        <div class = "cart-name row">
             <h6>Autumn Limited Edition...</h6>
        </div>
        <div class="row numbers">
          <div class="cart-prize col-2">
             <p>$${sneakers.prize}</p>
          </div> 
          <div class="cart-amount col-2">
            <p>x${quantityFromStorage}</p>
          </div>
          <div class="cart-total col-2">
           <p>${prizeFromStorage}<p>
          </div>
          <div class="cart-delete col-4">
          <button class= "delete" type="button"><img src="./images/icon-delete.svg" class="shopping-cart-image"></button>      
          </div>
       </div>
   </div>
</div>
 <button id="checkout">Checkout</button>
 </div>`
   
     shoppingCartRow.innerHTML = shoppingCartContent;
     cartFull.append(shoppingCartRow);
  
} 

}
     
    