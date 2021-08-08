const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.menu__body');
burger.addEventListener("click", () =>{
    headerMenu.classList.toggle("_active");
    burger.classList.toggle("_active");
    document.body.classList.toggle("_lock");
});