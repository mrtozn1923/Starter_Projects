
window.addEventListener("DOMContentLoaded", function () {
   console.log("homepage script yuklendi");

   initAddEventListeners();

});

function initAddEventListeners(){
   let btnHello=document.querySelector("#btnHello");

   if(btnHello){
      btnHello.addEventListener("click",function(){
         alert("Merhaba");
      });
   }
}

