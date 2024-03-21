const menuIcon  = document.querySelector('.menu-icon')
const content = document.querySelector('.content')
const contactLink = document.querySelector('.navigation a:last-child');

menuIcon.addEventListener('click' , () => {
    content.classList.toggle('navigate')
})

contactLink.addEventListener('click' , () =>{
    content.classList.remove('navigate')
})

//Loader
const loader = document.querySelector('.loader-wrapper');

window.addEventListener('load' , () =>{
    const body = document.querySelector('.body');
    setTimeout(() => {
        loader.classList.add('hide')
    } , 6000)

    setTimeout(() => {
        content.classList.add('show')
        body.style.overflow='auto'
    }, 5500)
})
//End of Loader


const stalker = document.getElementById('mouse-stalker'); 
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});