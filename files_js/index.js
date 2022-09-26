

const prize1 = document.getElementById('prize1');
const prize2 = document.getElementById('prize2');
const addCart2 = document.getElementById('addCart2');
const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById("plusButton");
const quantityInput = document.querySelector('.cart-input');



//PRIZE

let prize = 250.00

const calcPercent = function calcPercent(prize, percent){
    return ((percent *prize)/100)
};


prize1.innerText= '$ ' + calcPercent(250.00,50) + '.00';
prize2.innerText= '$' + prize + '.00';

// CART

//get the object
const sneakers = {name:"sneakers", prize:calcPercent(250.00,50), amount: 0};

//get quantity and Prize
quantityInput.value =sneakers.amount;
let startQuantity = Number(quantityInput.value);
let getPrize = (sneakers.prize*startQuantity);

 

minusButton.addEventListener('click', minusButtonClicked);

function minusButtonClicked(event){
    const button = event.target;
    quantityInput.value = --sneakers.amount;
    const minus = Number(quantityInput.value);
    console.log("🚀 ~ file: index.js ~ line 41 ~ minusButtonClicked ~ minus", minus)
     let PrizeDown = (sneakers.prize*minus);
     console.log("🚀 ~ file: index.js ~ line 43 ~ minusButtonClicked ~ PrizeDown", PrizeDown)
     
}


plusButton.addEventListener('click', plusButtonClicked);

function plusButtonClicked(event){
    const plusButtonClicked = event.target;
    quantityInput.value = ++sneakers.amount;
    let startQuantity = Number(quantityInput.value);
    console.log("🚀 ~ file: index.js ~ line 54 ~ plusButtonClicked ~ startQuantity", startQuantity)
    let getPrize = (sneakers.prize*startQuantity);
console.log("🚀 ~ file: index.js ~ line 56 ~ plusButtonClicked ~ getPrize ", getPrize )
minusButtonClicked
}

