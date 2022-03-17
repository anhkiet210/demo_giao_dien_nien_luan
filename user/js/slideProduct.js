// get element DOM
const mainImg = document.querySelector('.product__img--main img')
const listImg = document.querySelectorAll('.product__img--list .img-item img')
const preSlide = document.querySelector('.pre-slide i')
const nextSlide = document.querySelector('.next-slide i')

// declaration variable
var currenIndex = 0

// handling for slide img product
const showImg = () => {
    if(currenIndex == 0){
        preSlide.classList.add('hide')
    }
    else{
        preSlide.classList.remove('hide')
    }

    if(currenIndex == listImg.length-1){
        nextSlide.classList.add('hide')
    }
    else(
        nextSlide.classList.remove('hide')
    )
    mainImg.src = listImg[currenIndex].src
}
listImg.forEach( (item, index) => {
    item.addEventListener('click', function() {
        currenIndex = index
        showImg()
        document.querySelector('.img-active').classList.remove('img-active')
        item.classList.add('img-active')
    })
})
preSlide.addEventListener('click', function(){
    if(currenIndex > 0){
        currenIndex--
        showImg()
        document.querySelector('.active').classList.remove('active')
        listImg[currenIndex].classList.add('active')
    }
})
nextSlide.addEventListener('click', function(){
    if(currenIndex < listImg.length-1){
        currenIndex++
        showImg()
        document.querySelector('.active').classList.remove('active')
        listImg[currenIndex].classList.add('active')
    }
})
