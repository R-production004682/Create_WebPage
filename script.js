const menuIcon  = document.querySelector('.menu-icon')
const content = document.querySelector('.content')

menuIcon.addEventListener('click' , () => {
    content.classList.toggle('navigate')
})