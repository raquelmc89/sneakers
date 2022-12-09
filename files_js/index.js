const myCarousel = document.getElementById('myCarousel')
const prize1 = document.getElementById('prize1');
const prize2 = document.getElementById('prize2');
const addCart = document.getElementById('addToCart');
const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById("plusButton");
const quantityInput = document.querySelector('.cart-input');
const addToCart = document.querySelector('#addToCart');
const cartIcon = document.getElementById('cartIcon');;
const cartFull = document.querySelector('.cartFull');
const cartIconNumber = document.getElementById("cartIconNumber");
const sprize = document.getElementById("sneakers.prize");
const squantity = document.getElementById("quantityFromStorage");
const totalPrize = document.getElementById("prizeFromStorage");
const buttonDelete = document.querySelector('.delete');
const navList = document.getElementsByTagName('a');
const cartEmpty = document.getElementById('cartEmpty');

// MENU

const menu = document.createElement('div');
const modalMenu = `
   <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="nav-menu">
                    <div class="modal-body">
                    <button type="button" class="btn" data-mdb-dismiss="modal"><image id="closeImg" src="./images/icon-close.svg"></image></button>
                    <ul class="nav-list">
                      <li class="nav-item">
                       <a class="nav-link" href="#">Collections</a>
                      <li class="nav-item">
                       <a class="nav-link" href="#">Men</a>
                      <li class="nav-item">
                       <a class="nav-link" href="#">Women</a>
                      <li class="nav-item">
                       <a class="nav-link" href="#">About</a>
                      <li class="nav-item">
                       <a class="nav-link" href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
               </div>
             </div>
            </div>
    `
menu.innerHTML = modalMenu;
const menu2 = document.querySelector('#navMenu');
menu2.append(menu);



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

// add to cart button 

addToCart.addEventListener('click', addToCartClicked);

function addToCartClicked(event){
   const buttonClicked = event.target;
   cartIconNumber.innerText = quantityInput.value;  
   const itemAmount =  Number(cartIconNumber.innerText);
   itemAmount > 0 ? cartIconNumber.style.display="inline": null;
   
}

// view cart 
 /*   
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
    
*/


// THUMNNAILS  

$(document).ready(function(){


    $(".img-fluid").click(function(){
       var modal = document.getElementById('myModal')
       var carousel = document.getElementById('fullCarousel');
       var modalImg = carousel;
       modal.style.display = "block";
       modal.append(modalImg);
       const carouselControls = document.getElementById("controls");
       carouselControls.style.display="block";

      
            $("#closeCarousel").click(function(){
                modal.style.display = "none";
                myCarousel.append(carousel);
                carouselControls.style.display="none"

             });

             $(window).resize(function(){
              modal.style.display = "none";
              myCarousel.append(carousel)
           

             })
     });

     //CART ICON CLICKED

    $("#cartIcon").click(function(){
      
      $("#cart-modal").css("display", "block");
      $("#cart-modal").append($("#cartEmpty")) 
      $("#cart-modal").append($(".cartFull"));
      cartIconNumber.innerText == 0 ? $("#cartEmpty").css("display", "block"):null;
      cartIconNumber.innerText > 0 ? $(".cartFull").css("display", "block"): null;

       quantityFromStorage = localStorage.getItem('quantity');
       prizeFromStorage = localStorage.getItem('prize');

       sprize.innerText = "$" + sneakers.prize.toFixed(2);
       squantity.innerText= "X" + " " + quantityFromStorage;
       totalPrize.innerText = "$" + Math.floor(prizeFromStorage*100)/100;
 
       // CART EMPTY OR FULL 
     
      
       //CLOSE CART 

       $('.delete').click(function(){
          $(".cartFull").css("display", "none");
          $("#cartEmpty").css("display", "block");
        cartIconNumber.innerHTML = 0;
        cartIconNumber.style.display="none";
        
         });
   // close cart empty

         $("#closeCart").click(function(){
          cartEmpty.style.display="none";
          document.getElementById('cart-modal').style.display="none";
    
      
         })
       
    })


    
});  
