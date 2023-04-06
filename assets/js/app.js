const toTop = document.querySelector(".to-top");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav-li-conteiner");
const resume = document.querySelector(".resume-conteiner");

// scrtoll top
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
//  burger 

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger-active");
    navMenu.classList.toggle("menu-active");
    resume.classList.toggle("resume-active");
})


// modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}