function editNav() {
  let topNav = document.getElementById("my-top-nav")
  if (topNav.className === "top-nav") {
    topNav.className += " responsive"
  } else {
    topNav.className = "top-nav"
  }
}

// DOM Elements
const modalBg = document.querySelector(".bg-round")
const modalBtn = document.querySelectorAll(".modal-btn")
const closeBtn = document.querySelectorAll(".close")
const formData = document.querySelectorAll(".formData")

// Launch modal event
modalBtn.forEach((element) => element.addEventListener("click", function() {
  modalBg.style.display = "block"
}))

// Close modal event
closeBtn.forEach((element) => element.addEventListener("click", function() {
  modalBg.style.display = "none"
}))
