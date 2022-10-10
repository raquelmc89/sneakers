


const navIcon = document.querySelector('.icon-menu');
const navMenu = document.querySelector('.nav-menu');
console.log("🚀 ~ file: index.js ~ line 6 ~ navMenu", navMenu)
const prize1 = document.getElementById('prize1');
const prize2 = document.getElementById('prize2');
const addCart = document.getElementById('addToCart');
const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById("plusButton");
const quantityInput = document.querySelector('.cart-input');
const addToCart = document.querySelector('#addToCart');
const cartIcon = document.getElementById('cartIcon');
const cartEmpty = document.querySelector('.cart-Empty');
const cartFull = document.querySelector('.cartFull');
const cartIconNumber = document.getElementById("cartIconNumber");
const sprize = document.getElementById("sneakers.prize");
const squantity = document.getElementById("quantityFromStorage");
const totalPrize = document.getElementById("prizeFromStorage");
const buttonDelete = document.querySelector('.delete');

 //MENU

navIcon.addEventListener('click', showMenu);

function showMenu(event){
     const showMenuButton = event.target;
     navMenu.style.display = navMenu.style.display == "none" ?
     "block" : "none";
   
   
}   


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
    let storageQuantityDown = window.localStorage.setItem('quantity',quantity);
    const  prizeDown = ((sneakers.prize)*(quantityInput.value));
    quantityInput.value < 0 ? (quantityInput.value = ++sneakers.amount) : null
    let storagePrizeDown = window.localStorage.setItem('prize',prizeDown);
    
};

// plus button 

plusButton.addEventListener('click', plusButtonClicked);

function plusButtonClicked(event){
    const plusButtonClicked = event.target;
    quantityInput.value = ++sneakers.amount;
    const quantityUp = quantityInput.value;
    let storageQuantityUp = window.localStorage.setItem('quantity',quantityInput.value);
    const prizeUp = ((sneakers.prize)*(quantityInput.value));
    let storagePrizeUp = window.localStorage.setItem('prize',prizeUp)
  
minusButtonClicked

}

addToCart.addEventListener('click', addToCartClicked);

function addToCartClicked(event){
   const buttonClicked = event.target;
   cartIconNumber.innerText = quantityInput.value;  
   const itemAmount =  Number(cartIconNumber.innerText);
   
}



/*
let shoppingCartRow = document.createElement('div'); 
const shoppingCartContent = `<div class="row cartFull">
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
<p id="sneakers.prize>$${sneakers.prize}</p>
</div> 
<div class="cart-amount col-2">
<p id="quantityFromStorage">x${quantityFromStorage}</p>
</div>
<div class="cart-total col-2">
<p id="prizeFromStorage>${prizeFromStorage}<p>
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
 shoppingCartRow.style.display = "none"*/



    
cartIcon.addEventListener("click", cartIconClicked)

function cartIconClicked(event){
    const buttonClicked = event.target;

    cartIconNumber.innerText == 0 ?
    cartEmpty.classList.toggle("cart-Empty"): cartFull.classList.toggle("cartFull");
  
    quantityFromStorage= localStorage.getItem('quantity');
    prizeFromStorage = localStorage.getItem('prize');
   
    totalPrize.innerText = prizeFromStorage;
    squantity.innerText= "X" + quantityFromStorage;
    sprize.innerText ="$" + sneakers.prize + ".00";

   
    
    cartFull
    .querySelector('.delete')
    .addEventListener('click', removeShoppingItem);
    
        function removeShoppingItem(event){
        const buttonDelete = event.target;
        cartIconNumber.innerText > 0 ? 
        cartFull.classList.toggle("cartFull") : 
        null;
        cartIconNumber.innerHTML = 0;
        
      }
      
} ;

    

      
