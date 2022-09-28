
const prize1 = document.getElementById('prize1');
const prize2 = document.getElementById('prize2');
const addCart = document.getElementById('addToCart');
const input = document.getElementById('input');
const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById("plusButton");
const quantityInput = document.querySelector(".cart-input");
       




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

//get quantity and Prize for down
quantityInput.value = sneakers.amount
let quantity = Number(quantityInput.value);
let prizes = (sneakers.prize*quantity);


minusButton.addEventListener('click', minusButtonClicked);

function minusButtonClicked(event){
    const button = event.target;
    quantityInput.value = --sneakers.amount;
    let quantityDown = quantityInput.value
    prizeDown = (sneakers.prize*quantityDown);
    quantityDown.length
    console.log("🚀 ~ file: example.js ~ line 45 ~ minusButtonClicked ~ quantityDown.length", quantityDown.length)
    console.log("🚀 ~ file: example.js ~ line 45 ~ minusButtonClicked ~ prizeDown;", prizeDown)
    console.log("🚀 ~ file: example.js ~ line 49 ~ minusButtonClicked ~ quantityDown", quantityDown)
    if(quantityDown < 0){
        quantityInput.value = ++sneakers.amount;
    }

};

plusButton.addEventListener('click', plusButtonClicked);

function plusButtonClicked(event){
    const plusButtonClicked = event.target;
    quantityInput.value = ++sneakers.amount;
    const quantityUp = quantityInput.value;
    getPrize = (sneakers.prize*quantityUp);

    
minusButtonClicked

    console.log("🚀 ~ file: example.js ~ line 65 ~ plusButtonClicked ~ getPrize;", getPrize)
    console.log("🚀 ~ file: example.js ~ line 65 ~ plusButtonClicked ~  quantityUp",  quantityUp)
};
