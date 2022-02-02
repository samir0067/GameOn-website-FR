function editNav() {
  let x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalBg = document.querySelector(".bg-round")
const modalBtn = document.querySelectorAll(".modal-btn")
const closeBtn = document.querySelectorAll(".close")
const formData = document.querySelectorAll(".formData")

// Launch modal event
modalBtn.forEach((element) => element.addEventListener("click", function() {
  modalBg.classList.add( "select-show")
}))

// Close modal event
closeBtn.forEach((element) => element.addEventListener("click", function() {
  modalBg.classList.replace( "select-show", "select-hide")
}))
