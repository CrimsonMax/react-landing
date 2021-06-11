export function checkName() {
  const username = document.querySelector('#username')
  const usernameValue = username.value.trim()

  if (usernameValue === '') {
    setErrorFor(username, 'Пожалуйста введите имя!')
  } else if (!isName(usernameValue)) {
    setErrorFor(username, 'Некорректное имя!')
  } else {
    setSuccessFor(username)
  }
}

export function checkText() {
  const text = document.querySelector('#text')
  const textValue = text.value.trim()

  if (textValue === '') {
    setErrorFor(text, 'Пожалуйста введите текст!')
  } else {
    setSuccessFor(text)
  }
}

export function checkEmail() {
  const email = document.querySelector('#email')
  const emailValue = email.value.trim()

  if (emailValue === '') {
    setErrorFor(email, 'Пожалуйста введите Email!')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Некорректный Email!')
  } else {
    setSuccessFor(email)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.innerText = message

  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isName(name) {
  return /^[A-ZА-ЯЁ\s-]*$/i.test(name);
}