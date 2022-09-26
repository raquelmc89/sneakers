

const prize1 = document.getElementById('prize1');
const prize2 = document.getElementById('prize2');
const addCart2 = document.getElementById('addCart2');
const input = document.getElementById('input');
const minus = document.getElementById('minus');
const plus = document.getElementById("plus");





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
  let button = event.target;

  //get the object
  const getItem = sneakersInButtons;
  

  getQuantity();
  
    function getQuantity(){
       // plus button
       const quantity = document.querySelector(".cart-input");
       quantity.value = ++sneakers.quantity;
       let quantityValue = Number(quantity.value);
       let getPrize = (sneakers.prize*quantityValue);
       let quantityStoraged = getPrize;
       let Total = getPrize;
       
    
       
       /*const minus = document.querySelector(".cart-minusButton");
       const getLessItem = --quantityValue;
       console.log("🚀 ~ file: index.js ~ line 58 ~ getQuantity ~ getLessItem", getLessItem)*/
      
    };

  
} 

plusButtonClicked

document.getElementById("minus").innerHTML = sneakersInButtons


minus.addEventListener("click", minusButtonClicked);

function minusButtonClicked(event){

    const button = event.target;
    console.log("🚀 ~ file: index.js ~ line 77 ~ minusButtonClicked ~ button", button)
    if (quantityValue > 1){
        console.log("🚀 ~ file: index.js ~ line 79 ~ minusButtonClicked ~ quantityValue", quantityValue)
        
    }
 
    


}

