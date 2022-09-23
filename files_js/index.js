

const prize1 = document.getElementById('prize1');
const prize2 = document.getElementById('prize2');
const addCart2 = document.getElementById('addCart2');
const input = document.getElementById('input');
const minusButton = document.getElementById('minus');



//PRIZE

let prize = 250.00

const calcPercent = function calcPercent(prize, percent){
    return ((percent *prize)/100)
};


prize1.innerText= '$ ' + calcPercent(250.00,50) + '.00';
prize2.innerText= '$' + prize + '.00';

// CART

//get the object
const sneakers = {name:"sneakers", prize:calcPercent(250.00,50), quantity: 1 };
document.getElementById("plus").innerHTML = sneakers;
const sneakersInButtons= sneakers;
const plus = document.getElementById("plus");


plus.addEventListener("click", plusButtonClicked);

function plusButtonClicked(event){
  //get the button 
  const button = event.target

  //get the object
  const getItem = sneakersInButtons;
  const getPrize = sneakers.prize;

getQuantity();
  
  function getQuantity(){
 const quantity = document.querySelector(".cart-input");
 quantity.value = sneakers.quantity;
 const quantityValue = quantity.value;
 console.log("🚀 ~ file: index.js ~ line 46 ~ plusButtonClicked ~ quantityValue", quantityValue)
 const quantityStoraged = getPrize;
 console.log("🚀 ~ file: index.js ~ line 44 ~ plusButtonClicked ~ quantityStoraged", quantityStoraged)
  }

  addQuantity()

  function addQuantity(){
    
  }
 
 

 
 
} 
  
  

