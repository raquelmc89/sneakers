
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
const myCarousel = document.getElementById('myCarousel')
console.log("🚀 ~ file: index.js ~ line 18 ~ myCarousel", myCarousel)


// THUMNNAILS 
$(document).ready(function(){
    $(".img-fluid").click(function(){
       var modal = document.getElementById('myModal')
       const carouselBack = document.getElementById("#")
       var carousel = document.getElementById('fullCarousel');
       var modalImg = carousel;
       modal.style.display = "block";
       modal.append(modalImg);
      
       
            
            $("#closeCarousel").click(function(){
                modal.style.display = "none";

                /*modal.remove(modalImg)*/
                myCarousel.append(carousel)
               /*$(modal).toggle();*/
                
             })
             $(window).resize(function(){
             
                modal.style.display = "none";
                
             })
     })
    
});  

window.addEventListener("resize", resize);

function resize(event){
    resizeButton = event.target;

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
  name:"sneakers",
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
    window.localStorage.setItem('quantity',quantity);
    const  prizeDown = ((sneakers.prize)*(quantityInput.value));
    quantityInput.value < 0 ? (quantityInput.value = ++sneakers.amount) : null
    window.localStorage.setItem('prize',prizeDown);
    
};

// plus button 

plusButton.addEventListener('click', plusButtonClicked);

function plusButtonClicked(event){
    const plusButtonClicked = event.target;
    quantityInput.value = ++sneakers.amount;
    window.localStorage.setItem('quantity',quantityInput.value);
    const prizeUp = ((sneakers.prize)*(quantityInput.value));
    window.localStorage.setItem('prize',prizeUp)
  
minusButtonClicked

}

addToCart.addEventListener('click', addToCartClicked);

function addToCartClicked(event){
   const buttonClicked = event.target;
   cartIconNumber.innerText = quantityInput.value;  
   const itemAmount =  Number(cartIconNumber.innerText);
   itemAmount > 0 ? cartIconNumber.style.display="inline": null;
   
}


    
cartIcon.addEventListener("click", cartIconClicked)

function cartIconClicked(event){
    const buttonClicked = event.target;

    cartIconNumber.innerText == 0 ?
    cartEmpty.classList.toggle("cart-Empty"): cartFull.classList.toggle("cartFull");
        quantityFromStorage = localStorage.getItem('quantity');
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
        cartFull.classList.toggle("cartFull") : null;
        cartIconNumber.innerHTML = 0;
        cartIconNumber.style.display="none";
      
      }
    
}




      
