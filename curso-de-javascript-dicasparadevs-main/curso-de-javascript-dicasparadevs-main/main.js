/* const items = document.querySelector('.items')
const buttons = document.querySelector('.btn') */

/* items.remove()

items.firstElementChild.remove()
items.lastElementChild.remove()

items.children[0].textContent = 'Item Um'

items.lastElementChild.innerHTML = '<h1>Ola</h1>'

buttons.style.background = 'red' */


const submitButton = document.querySelector('#submit-button')
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const items = document.querySelector('.items')
const body = document.querySelector('body')
const erroMessage = document.querySelector('.msg')

submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    const nameValue = nameInput.value
    const emailValue = emailInput.value

    if (nameValue === '' || emailValue === '') {
        erroMessage.textContent = 'Insira Nome e Email'
        erroMessage.classList = 'error'

        setTimeout(() => {
            erroMessage.textContent = ''
            erroMessage.classList = ''

        }, 2000)

        return
    }

    myForm.style.background = 'red'
    const li = document.createElement('li')
    li.classList = 'item'
    li.innerHTML = `Nome: ${nameValue}<br/> Email: ${emailValue}`

    items.appendChild(li)

    nameInput.value = ''
    emailInput.value = ''

    /* items.children[0].textContent = nameValue
    items.children[1].textContent = emailValue */

    //body.style.background = 'white'
})





