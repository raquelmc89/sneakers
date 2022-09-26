
const prize1 = document.getElementById('prize1');
const prize2 = document.getElementById('prize2');
const addCart2 = document.getElementById('addCart2');
const input = document.getElementById('input');
const minus = document.getElementById('minus');
const plus = document.getElementById("plus");
const quantity = document.querySelector(".cart-input");
       




//PRIZE

let prize = 250.00

const calcPercent = function calcPercent(prize, percent){
    return ((percent *prize)/100)
};


prize1.innerText= '$ ' + calcPercent(250.00,50) + '.00';
prize2.innerText= '$' + prize + '.00';

// CART

//get the object
const sneakers = {name:"sneakers", prize:calcPercent(250.00,50), quantity: 0 };
document.getElementById("plus").innerHTML = sneakers;
const sneakersInButtons= sneakers;

plus.addEventListener("click", plusButtonClicked);

function plusButtonClicked(event){

  //get the button 
  const button = event.target

  //get the object
  const getItem = sneakersInButtons;

   //minus button
   document.getElementById("minus").innerHTML = sneakersInButtons;
   minus.addEventListener("click", minusButtonClicked);
  
    function minusButtonClicked(event){
      button;
      quantity.value = --quantityValue;

      let minusQuantity = Number(quantity.value)
      console.log("🚀 ~ file: example.js ~ line 53 ~ minusButtonClicked ~ minusQuantity", minusQuantity)
      

    };
    
 
  //get prize  
  
    quantity.value = ++sneakers.quantity;
    let quantityValue = Number(quantity.value);
    console.log("🚀 ~ file: example.js ~ line 47 ~ plusButtonClicked ~ quantityValue", quantityValue)
    let getPrize = (sneakers.prize*quantityValue);
     
    

      
}

   
