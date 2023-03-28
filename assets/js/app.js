// scrtoll top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
//  burger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav-li-conteiner");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger-active");
    navMenu.classList.toggle("menu-active");
})



// show more button

