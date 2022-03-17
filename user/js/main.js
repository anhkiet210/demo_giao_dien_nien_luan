// get element DOM
const cartLink = document.querySelector('.cart__link')
const cartDropdown = document.querySelector('.cart__dropdown')
const btnAddAddress = document.querySelector('#add-address')
const popupAddress = document.querySelector('.popup-add-address')
const btnClose = document.querySelector('.btn-close')

// handling for cart dropdown
cartLink.addEventListener('click', function(){
    cartDropdown.classList.toggle('open')
})

//handling for popup add address
btnAddAddress.addEventListener('click', function(){
    popupAddress.classList.add('open')
})
btnClose.addEventListener('click', function(){
    popupAddress.classList.remove('open')
})