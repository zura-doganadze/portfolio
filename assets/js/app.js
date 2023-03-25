const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
//  burger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav-li-conteiner");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
