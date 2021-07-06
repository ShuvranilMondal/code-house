let nav = document.getElementById("nav");
let navBtn = document.getElementById("nav-btn");
let navbar=()=>{
    nav.classList.toggle("nav-active");
}
navBtn.addEventListener("click",()=>{
    navbar()
})