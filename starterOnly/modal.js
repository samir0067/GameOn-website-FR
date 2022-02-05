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

// Launch modal event
modalBtn.forEach((element) => element.addEventListener("click", function() {
  modalBg.style.display = "block"
}))

// Close modal event
closeBtn.forEach((element) => element.addEventListener("click", function() {
  modalBg.style.display = "none"
  // removeElementsByClass('errorField')
}))

// DOM form fields
const form = document.getElementById("form")
const first = document.getElementById("first")
const last = document.getElementById("last")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const quantity = document.getElementById("quantity")

// DOM error fields
const errorFirst = document.getElementById("error-first")
const errorLast = document.getElementById("error-last")
const errorEmail = document.getElementById("error-email")
const errorBirthdate = document.getElementById("error-birthdate")
const errorQuantity = document.getElementById("error-quantity")


// Function to check the fields
function validate() {

  // field firstName
  if (first.value === '') {
    submissionDenied(first, errorFirst, 'Prénom requis')
  } else if (first.value.length < 2) {
    submissionDenied(first, errorFirst, 'Minimum 2 caractères')
  } else {
    submissionValidate(first, errorFirst)
  }

  // field lastName
  if (last.value === '') {
    submissionDenied(last, errorLast, 'Nom requis')
  } else if (last.value.length < 2) {
    submissionDenied(last, errorLast, 'Minimum 2 caractères')
  } else {
    submissionValidate(last, errorLast)
  }

  // field email
  if (email.value === '') {
    submissionDenied(email, errorEmail, 'E-mail requis')
  } else if (!validateEmail(email.value)) {
    submissionDenied(email, errorEmail, 'Cet email n\'est pas valide')
  } else {
    submissionValidate(email, errorEmail)
  }
  console.log('birthdate.value =>', birthdate.value)
  // field birthdate
  if (birthdate.value === '') {
    submissionDenied(birthdate, errorBirthdate, 'Date de naissance requis')
  } else if (!validateBirthdate(birthdate.value)) {
    submissionDenied(birthdate, errorBirthdate, 'Date de naissance non valide')
  } else {
    submissionValidate(birthdate, errorBirthdate)
  }

  // field quantity
  if (quantity.value === '') {
    submissionDenied(quantity, errorQuantity, 'Nombre de tournois GameOn déjà participé requis')
  } else if (!validateNumber(quantity.value)) {
    submissionDenied(quantity, errorQuantity, 'Préciser entre 1 et 100 participations')
  } else {
    submissionValidate(quantity, errorQuantity)
  }
}

// function removeElementsByClass(className){
//   const elements = document.getElementsByClassName(className);
//   while(elements.length > 0){
//     elements[0].parentNode.removeChild(elements[0]);
//   }
// }

// Field submission denied
function submissionDenied(field, errorField, message) {
  field.style.border = "solid 3px red"
  errorField.classList.add('errorField')
  errorField.innerHTML = message
}

// Field submission validate
function submissionValidate(field, errorField) {
  field.style.border = "solid 3px limegreen"
  errorField.classList.remove('errorField')
  errorField.innerHTML = ''
}

// Validation of the email field
function validateEmail(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(String(email).toLowerCase())
}

// Validation of the birthdate field
function validateBirthdate(birthdate) {
  const birthdateRegex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
  // const birthdateRegexFr = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
  return birthdateRegex.test(birthdate)
}

// Validation of the quantity field
function validateNumber(number) {
  const numberRegex = /^[1-9][0-9]?$|^100$/
  return numberRegex.test(number)
}

// Validation of the modal form
form.addEventListener("submit", function(event) {
  event.preventDefault()
  validate()
})
