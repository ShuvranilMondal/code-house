let nav = document.getElementById("nav");
let navBtn = document.getElementById("nav-btn");
let navBar = document.getElementById("navbar");
let navbar=()=>{
    nav.classList.toggle("nav-active");
}
navBtn.addEventListener("click",()=>{
    navbar()
})


let img = document.getElementById('img');

let bgImageChnage=()=>{
    let imgList = ["./img/b3.jpg","./img/b4.jpg","./img/b1.jpg"];
    let i = 0;
    setInterval(() => {
        if(i > imgList.length-1){
            i = 0;
        }
        img.src = imgList[i];
        i++
    }, 3000);
}

bgImageChnage();



let line = document.getElementById("line-change");

let typeAnimation=()=>{
    let li = ["joy","Me","fun"];
    let i = 0;
    setInterval(()=>{
        if(i > li.length-1){
            i = 0;
        }
        line.innerHTML = li[i];
        i++
    },4000);
    
}
typeAnimation();