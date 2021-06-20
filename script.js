const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.getElementById('clear-all')
const plus = document.getElementById('plus-icon')
const input = document.getElementById('item')
//localStorage.clear()
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const trashIcon = document.createElement('i')
  li.textContent = text
  trashIcon.classList.add("fa-trash")
  trashIcon.classList.add("fa")
  ul.appendChild(li)
  li.appendChild(span)
  span.appendChild(trashIcon)

  li.addEventListener('mouseover', function (e) {
    span.style.display = "inline"
    li.style.background = "#FAFAFA"
  })

  li.addEventListener('mouseleave', function (e) {
    span.style.display = "none"
    li.style.background = "white"
  })

  trashIcon.addEventListener('mouseover', function(e) {
    trashIcon.style.cursor = "pointer";
    trashIcon.style.color = "#009933";
  })

  trashIcon.addEventListener('mouseleave', function(e) {
    trashIcon.style.cursor = "mouse";
    trashIcon.style.color = "black";
  })

  trashIcon.addEventListener('click', function (e) {
    ul.removeChild(li)
    var removeItem = itemsArray[1]
    console.log(removeItem)
    localStorage.removeItem(removeItem)
  })
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
})

data.forEach((item) => {
  liMaker(item)
})

button.addEventListener('click', function () {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})

plus.addEventListener('click', function (e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
})
