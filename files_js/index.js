

const prize1 = document.getElementById('prize1');
const prize2 = document.getElementById('prize2');
const addCart = document.getElementById('addToCart');
const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById("plusButton");
const quantityInput = document.querySelector('.cart-input');
const cartIcon = document.getElementById('cartIcon');
const cartEmpty = document.querySelector('.cartEmpty');



//PRIZE

let prize = 250.00

const calcPercent = function calcPercent(prize, percent){
    return ((percent *prize)/100)
};


prize1.innerText= '$ ' + calcPercent(250.00,50) + '.00';
prize2.innerText= '$' + prize + '.00';

// CART

//get the object, quantity and prize
const sneakers = {name:"sneakers", prize:calcPercent(250.00,50), amount: 0};
quantityInput.value = sneakers.amount
let quantity = Number(quantityInput.value);
let prizes = (sneakers.prize*quantity);

// minus button 

minusButton.addEventListener('click', minusButtonClicked);

function minusButtonClicked(event){
    const button = event.target;
    quantityInput.value = --sneakers.amount;
    let quantityDown = quantityInput.value
    prizeDown = (sneakers.prize*quantityDown);

    if(quantityDown < 0){
        quantityInput.value = ++sneakers.amount;
    }

};

// plus button 

plusButton.addEventListener('click', plusButtonClicked);

function plusButtonClicked(event){
    const plusButtonClicked = event.target;
    quantityInput.value = ++sneakers.amount;
    const quantityUp = quantityInput.value;
    getPrize = (sneakers.prize*quantityUp);

    
minusButtonClicked

};

/*
  const shoppingCartEmpty = document.createElement('div');
   const shoppingCartContent = `<div class= "cartEmpty">
   <div id="cartTitle">
     <h4>Cart</h4>
   </div>
   <div id="cartCont">
     <h4> Your cart is empty</h4>
   </div>
 </div>`
   shoppingCartEmpty.innerHTML = shoppingCartContent;
   cartEmpty.append(shoppingCartEmpty);
   let shoppingCartEmptyShow = shoppingCartEmpty.innerText;


   cartIcon.addEventListener("click", cartIconClicked)
   
     function cartIconClicked(event){
    buttonCart = event.target;
     cartIcon.innerHTML = shoppingCartEmptyShow;
    

   };*/

    cartIcon.addEventListener("click", cartIconClicked)
   
     function cartIconClicked(event){
    buttonCart = event.target;
    console.log("hola");
     cartEmpty.style.display = "block";
     }