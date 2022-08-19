const burgerBtn = document.querySelector('.burgerButton');
const navBar = document.querySelector('.navBar');

burgerBtn.addEventListener('click', function(){
    burgerBtn.children[0].classList.toggle('btn1-clicked')
    burgerBtn.children[1].classList.toggle('btn2-clicked')
    burgerBtn.children[2].classList.toggle('btn3-clicked')
    navBar.classList.toggle('navBar-clicked')
})