const body = document.querySelector('body')
const sideBar = document.querySelector('.sidebar')
const toggle = document.querySelector('.toggle')
const modeSwitch = document.querySelector('.toggle-switch')
const modeText = document.querySelector('.mode-text')
const section = document.querySelector('.section')

toggle.addEventListener('click', () => {
    sideBar.classList.toggle('close')
    
    const widthWindow = document.documentElement.clientWidth
    if(sideBar.classList.contains('close')){
        section.style.width = (widthWindow - 103)+'px'
    }else{
        section.style.width = (widthWindow - 265) +'px'
    }
})

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark')  

    if(body.classList.contains('dark')){
        modeText.innerText = "Light Mode"
    }else{
        modeText.innerText = "Dark Mode"
    }
})