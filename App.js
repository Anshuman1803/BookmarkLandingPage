// Nav Bar javaScript

let nav= document.getElementById("Navbar");
let HamButton = document.getElementById("MenuButton");
let CloseHamButton = document.getElementById("CloseMenuButton");

HamButton.addEventListener('click', ()=>{
   nav.style.display = "block";
   HamButton.style.display = "none"
   CloseHamButton.style.display = "block"
})
CloseHamButton.addEventListener('click', ()=>{
   nav.style.display = "none";
   CloseHamButton.style.display = "none"
   HamButton.style.display = "block"
})



// Features tab javaScript
let featureOption = document.querySelectorAll(".FeaturesOption");
let featuresTab = document.querySelectorAll(".tab");

let SimpleBookingButton = document.getElementById("SimpleBooking");
let SpeedySearchingButton = document.getElementById("SpeedySearching");
let EasySharingButton = document.getElementById("EasySharing");

let BookingTab = document.getElementById("Tab-1")
let SearchTab = document.getElementById("Tab-2")
let ShareTab = document.getElementById("Tab-3")

for (let i = 0; i < featureOption.length; i++) {
	featureOption[i].addEventListener("click", () => {
		featureOption.forEach((button) => button.classList.remove("active"));
		featuresTab.forEach((tab) => tab.classList.remove("ActiveTab"));
		featureOption[i].classList.add("active");
      featuresTab[i].classList.add("ActiveTab")
	});
}
SimpleBookingButton.addEventListener('click', ()=>{
   BookingTab.style.display= "flex"
   SearchTab.style.display= "none"
   ShareTab.style.display= "none"
})
SpeedySearchingButton.addEventListener('click', ()=>{
   BookingTab.style.display= "none"
   SearchTab.style.display= "flex"
   ShareTab.style.display= "none"

})
EasySharingButton.addEventListener('click', ()=>{
   BookingTab.style.display= "none"
   SearchTab.style.display= "none"
   ShareTab.style.display= "flex"

})


// FAQ JavaScript
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
questions.forEach((e) => e.addEventListener("click", hide));

function hide() {
  console.log(this.dataset.question);
  answers.forEach((e) => e.classList.add("block"));
  let target = document.querySelector(`.answer-${this.dataset.question}`);
  target.classList.toggle("block");
  setTimeout(() => {
   answers.forEach((e) => e.classList.add("block"));
 }, 9000);
}



// ContactFormSection JavaScript
let ErrorMsg = document.getElementById("ErrorMsg");
let ErrorIcon= document.getElementById("Erroricon");
let EmailInput = document.getElementById("EmailBox");
let ContactButton = document.getElementById("ContactUsButton");
let ValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

ContactButton.addEventListener('click', ()=>{
    if(EmailInput.value.match(ValidEmail))
    {
        ErrorMsg.style.opacity = "0"
        ErrorIcon.style.opacity = "0"
        
    }
    else{
      ErrorMsg.style.opacity = "1"
      ErrorIcon.style.opacity = "1"
      EmailInput.style.border = "2px solid hsl(0, 94%, 66%)"
        EmailInput.focus();
    }
});