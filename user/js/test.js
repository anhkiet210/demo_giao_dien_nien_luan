const mainImg = document.querySelector('.main-img img')
const listImg = document.querySelectorAll('.list-img .img-item img')

var currenIndex = 0
const showImg = () => {
    mainImg.src = listImg[currenIndex].src
}
listImg.forEach( (item, index) => {
    item.addEventListener('click', function() {
        currenIndex = index
        showImg()
        document.querySelector('.active').classList.remove('active')
        item.classList.add('active')
    })
})