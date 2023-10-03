let howDidWeDo = document.querySelector(".how-did-we-do");
let thankYouState = document.querySelector(".thank-you-state");
let submitButton = document.getElementById("submit");
let numberButtons = document.querySelectorAll(".button_circles");
let number = document.querySelector(".numberJs");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        number.innerHTML = button.innerHTML;
        if (number.innerHTML >= 0 || number.innerHTML <= 5 ) {
            submitButton.addEventListener("click", ()=>{
                howDidWeDo.style.display = "none";
                thankYouState.style.display = "flex";
                
            });
        }          
      });
    
});



