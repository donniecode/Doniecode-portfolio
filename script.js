//mobile sidebar
const menubtns = document.querySelector(".menu-btns");
const hamburger = document.querySelector(".hamburger");
const closemenu = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", function(){
  sidebar.style.display="flex";
  hamburger.style.display="none";
  closemenu.style.display="block";
})

closemenu.addEventListener("click", function(){
  sidebar.style.display="none";
  hamburger.style.display="block";
  closemenu.style.display="none";
})

//form validation
const submitbtn = document.querySelector("#submit-btn");
const nameinput = document.querySelector("#name-input");
const emailinput = document.querySelector("#email-input");
const textarea = document.querySelector("#textarea");

