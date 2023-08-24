
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const toggleDiv = document.querySelector("#toggle-div")




btn.addEventListener("mouseover", ()=>{
   document.querySelector("#input").style.display = "inline-block"
})


// -------------------------------------------------------------
// ------------------------Cart section-------------------------

const priceBtn = document.querySelector("#price")
const increaseBtn = document.querySelector("#increase-btn")
const decreaseBtn = document.querySelector("#decrease-btn")
const quantity = document.querySelector("#quantity")
const totalPrice = document.querySelector("#total-price")
// let price = priceBtn.innerHTML;

// function fixedPrice(){
   
   //    if(totalPrice != null){
      //      return totalPrice.innerHTML = "$" + priceBtn.innerHTML;
//   }else return 

// }

// fixedPrice()

function increaseQuantity(){
   let quantityNumber = quantity.innerHTML; //quantity = quantityNumber
   let priceHTML = priceBtn.innerHTML
   quantityNumber++;
   console.log(quantity.innerHTML = quantityNumber)
   // totalPrice.innerHTML
   totalPrice.innerHTML = "$" + (quantityNumber * priceHTML).toFixed(2)
}

// increaseBtn.addEventListener("onclick", increaseQuantity)

function decreaseQuantity(){
   let quantityNumber = quantity.innerHTML;
      (quantityNumber) === 0 ? undefined : quantityNumber--;

      if(quantityNumber >= 1){
         quantity.innerHTML = quantityNumber
         totalPrice.innerHTML = "$" + (quantityNumber * priceBtn.innerHTML).toFixed(2)
      }else return
}

// decreaseBtn.addEventListener("click", decreaseQuantity)







// -------------------------------------------------------------
// ------------------------Add Coffee-------------------------


const inputFile = document.querySelector("#input-file")
const labelFile = document.querySelector("#label-file")
const coffeeImg = document.querySelector("#add-coffee-img")

// labelFile.addEventListener("click", console.log("click"))

function imageAdded(){
   console.log("clicked")
   coffeeImg.src = URL.createObjectURL(inputFile.files[0])
}






// ---------------------------------------------------------------
//-------------------------Order section-------------------------

const buyForm = document.querySelector("#buy-form")
const buyInput = document.querySelector("#buy-input")
const buyBtn = document.querySelector("#buy-btn")

buyForm.addEventListener("submit", (e)=>{

   if(buyInput.value = "" || buyInput.value == null){
      return 
   }else {
      buyBtn.addEventListener("click", ()=>{
         Command: toastr["info"]("Ordered successfully")
         toastr.options = {
           "closeButton": true,
           "debug": false,
           "newestOnTop": false,
           "progressBar": false,
           "positionClass": "toast-bottom-center",
           "preventDuplicates": true,
           "onclick": null,
           "showDuration": "300",
           "hideDuration": "1000",
           "timeOut": "2000",
           "extendedTimeOut": "500",
           "showEasing": "swing",
           "hideEasing": "linear",
           "showMethod": "fadeIn",
           "hideMethod": "fadeOut"
         }
      
      })
   }
   e.preventDefault()
})



