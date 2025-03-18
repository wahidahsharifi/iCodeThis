const addButton = document.getElementById('expense-form')

const expenseList = document.getElementById('expense-list')
expenseList.innerHTML = '';
const prices = [];

addButton.addEventListener('submit', (e) => {
    e.preventDefault()

    const itemName = document.getElementById('item-name')
    const itemPrice = document.getElementById('item-price')
    const totalPrice = document.querySelector('.expense-list-wrapper h2')

    expenseList.innerHTML += `<li>${itemName.value} - $${itemPrice.value}</li>`
    prices.push(+itemPrice.value)
    totalPrice.textContent = `Total Price: ${prices.reduce((a,c) => a + c,0)}`
})