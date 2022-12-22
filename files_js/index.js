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

    cartEmpty.style.display = "none";
  
    minusButtonClicked

}

// add to cart button 

addToCart.addEventListener('click', addToCartClicked);

function addToCartClicked(event){
   const buttonClicked = event.target;
   cartIconNumber.innerText = quantityInput.value;  
   const itemAmount =  Number(cartIconNumber.innerText);
   itemAmount > 0 ? cartIconNumber.style.display="inline": null;

   // stop showing cart if close button hasn't been clicked 

   cartEmpty.style.display = "none";
   document.getElementById("cart-modal").style.display = "none";
   
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




$(document).ready(function(){

// THUMNNAILS  

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

     //MODAL MENU 
     /*
     $("#navIcon").click(function(){
      const modalMenu = `
       <ul class="navList">
         <li class="nav-item">
          <a class="navLink" href="#">Collections</a>
         <li class="nav-item">
          <a class="navLink" href="#">Men</a>
         <li class="nav-item">
          <a class="navLink" href="#">Women</a>
         <li class="nav-item">
          <a class="navLink" href="#">About</a>
         <li class="nav-item">
          <a class="navLink" href="#">Contact</a>
         </li>
       </ul>
     </div>
     </div>`
     $("#menuModal").css("display", "block")
                    .append($(modalMenu))
                    .append($("#closeMenu").css("display", "block"));
     $(".controls").css("display", "none");
     $("#closeMenu").click(function(){
   
      $("#menuModal").css("display", "none")
                     .remove(modalMenu)
            

      $(".controls").css("display", "block");
      $
     
        $(window).resize(function(){
          $("#menuModal").css("display", "none");
         })
     })
   
     
   });

      $("#navIcon").click(function(){
        $("#menuModal").css("display", "block")
                       .append($(".navList").css("display", "block"))
                       .append($("#closeMenu").css("display", "block"));
        $(".controls").css("display", "none")
        $("#closeMenu").click(function(){
           $("#menuModal").css("display", "none");
           $(".controls").css("display", "block");


       })
     
    
     })

*/

$("#navIcon").click(function(){
  $("#menu").css("display","block")
   $("#closeMenu").css("display", "block") ;        /*.append($("#closeMenu").css("display", "block"));*/
  $(".controls").css("display", "none");
    
        $("#closeMenu").click(function(){
          
          $("#menu").css( "display", "none");
          $(".controls").css("display", "block");
         
      });
   
       
})

$(window).resize(function(){
  $("#menu").css("display", "none");
 })
  
     //CART ICON CLICKED

    $("#cartIcon").click(function(){
      
      $("#cart-modal").css("display", "block")
                      .append($("#cartEmpty")) 
                      .append($(".cartFull"));
      cartIconNumber.innerText == 0 ? $("#cartEmpty").css("display", "block"):null;
      cartIconNumber.innerText > 0 ? $(".cartFull").css("display", "block"): null;

       quantityFromStorage = localStorage.getItem('quantity');
       prizeFromStorage = localStorage.getItem('prize');

       sprize.innerText = "$" + sneakers.prize.toFixed(2);
       squantity.innerText= "X" + " " + quantityFromStorage;
       totalPrize.innerText = "$" + Math.floor(prizeFromStorage*100)/100;
 
    
       //CLOSE FULL CART 

       $('.delete').click(function(){
          $(".cartFull").css("display", "none");
          $("#cartEmpty").css("display", "block");
        cartIconNumber.innerHTML = 0;
        cartIconNumber.style.display="none";
        
         });

         // CLOSE EMPTY CART

         $("#closeCart").click(function(){
          cartEmpty.style.display="none";
          document.getElementById('cart-modal').style.display="none";
    
      
         })
       
    })


    
});  
