// DOM Elements
const openModalBtn = document.querySelectorAll(".open-modal-btn")
const closeModal = document.querySelectorAll(".close-modal")
const closePopUp = document.querySelectorAll(".close-pop-up")
const textControl = document.querySelectorAll(".text-control")
const radioIcon = document.querySelectorAll(".radio-icon")

const form = document.getElementById("form")
const modal = document.getElementById("modal")
const popup = document.getElementById("popup")

// Handle modal form and popup validation
openModalBtn.forEach((element) => element.addEventListener("click", function() {
  modal.style.display = "block"
}))

closeModal.forEach((element) => element.addEventListener("click", function() {
  modal.style.display = "none"
}))

closePopUp.forEach((element) => element.addEventListener("click", function() {
  textControl.forEach(element => element.style.border = "1px solid #ccc")
  popup.style.display = "none"
}))

// DOM form fields
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
const errorCity = document.getElementById("error-city")

// flag to validate fields
let firstIsValid = false
let lastIsValid = false
let emailIsValid = false
let birthdateIsValid = false
let quantityIsValid = false
let cityIsValid = false

// Function to check the fields
function validate() {
  // field firstName
  if (first.value === '') {
    submissionDenied(first, errorFirst, 'Prénom requis')
    firstIsValid = false
  } else if (first.value.length < 2) {
    submissionDenied(first, errorFirst, 'Veuillez entrer minimum 2 caractères')
    firstIsValid = false
  } else {
    submissionValidate(first, errorFirst)
    firstIsValid = true
  }

  // field lastName
  if (last.value === '') {
    submissionDenied(last, errorLast, 'Nom requis')
    lastIsValid = false
  } else if (last.value.length < 2) {
    submissionDenied(last, errorLast, 'Veuillez entrer 2 caractères ou plus pour le champ du nom')
    lastIsValid = false
  } else {
    submissionValidate(last, errorLast)
    lastIsValid = true
  }

  // field email
  if (email.value === '') {
    submissionDenied(email, errorEmail, 'E-mail requis')
    emailIsValid = false
  } else if (!validateEmail(email.value)) {
    submissionDenied(email, errorEmail, 'Cet email n\'est pas valide')
    emailIsValid = false
  } else {
    submissionValidate(email, errorEmail)
    emailIsValid = true
  }

  // field birthdate
  if (birthdate.value === '') {
    submissionDenied(birthdate, errorBirthdate, 'Vous devez entrer votre date de naissance')
    birthdateIsValid = false
  } else if (!validateBirthdate(birthdate.value)) {
    submissionDenied(birthdate, errorBirthdate, 'Date de naissance non valide')
    birthdateIsValid = false
  } else {
    submissionValidate(birthdate, errorBirthdate)
    birthdateIsValid = true
  }

  // field quantity
  if (quantity.value === '') {
    submissionDenied(quantity, errorQuantity, 'Nombre de tournois GameOn déjà participé requis')
    quantityIsValid = false
  } else if (!validateNumber(quantity.value)) {
    submissionDenied(quantity, errorQuantity, 'Préciser entre 1 et 100 participations')
    quantityIsValid = false
  } else {
    submissionValidate(quantity, errorQuantity)
    quantityIsValid = true
  }

  // radio button
  if (validateRadio(form.elements["location"]) === undefined) {
    radioIcon.forEach(element => element.style.border = "solid 2px red")
    errorCity.classList.add('errorField')
    errorCity.innerHTML = 'Vous devez choisir une option'
    cityIsValid = false
  } else {
    radioIcon.forEach(element => element.style.border = "solid 2px #279e7a")
    errorCity.classList.remove('errorField')
    errorCity.innerHTML = ''
    cityIsValid = true
  }

  if (firstIsValid &&
    lastIsValid &&
    emailIsValid &&
    birthdateIsValid &&
    quantityIsValid &&
    cityIsValid
  ) {
    submissionForm()
  }

}

// Handle submission
function submissionForm() {
  modal.style.display = "none"
  popup.style.display = "block"
  form.reset()
}

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
  return birthdateRegex.test(birthdate)
}

// Validation of the quantity field
function validateNumber(number) {
  const numberRegex = /^[1-9][0-9]?$|^100$/
  return numberRegex.test(number)
}

// Validation of the radio
function validateRadio(radios) {
  for (let radio of radios) {
    if (radio.checked) {
      return radio.value
    }
  }
}

// Validation of the modal form
form.addEventListener("submit", function(event) {
  event.preventDefault()
  validate()
})
