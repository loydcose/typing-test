const textField = document.querySelector('.text-field')
const textInput = document.querySelector('input')

const textFieldSplit = textField.innerText.split('')
// console.log((textFieldSplit[2] = `<span>${textFieldSplit[2]}</span>`))
// console.log(textFieldSplit.join(''))

textField.addEventListener('click', () => {
  textInput.focus()
  textInput.addEventListener('keyup', (e) => {
    let index = textInput.value.length - 1

    if (textInput.value[index] == textField.innerText[index]) {
      textFieldSplit[index] = `<span>${textFieldSplit[index]}</span>`
      textField.innerHTML = textFieldSplit.join('')
      textField.childNodes[index].classList.add('color')
    } else {
      textFieldSplit[index] = `<span>${textFieldSplit[index]}</span>`
      textField.innerHTML = textFieldSplit.join('')
      textField.childNodes[index].classList.add('red-color')
    }
  })
})

/*
- use split on txtField

- click 
- index of last letter input 
- compare textField and textInput last char

- if same 
  kunin ko mapped
  index ng letter na gusto
  innerText = <span>tae
  textfield.innerHTML = yown tapos


*/
