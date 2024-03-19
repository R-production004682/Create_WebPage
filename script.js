const menuIcon  = document.querySelector('.menu-icon')
const content = document.querySelector('.content')

menuIcon.addEventListener('click' , () => {
    content.classList.toggle('navigate')
})

const stalker = document.getElementById('mouse-stalker'); 
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});