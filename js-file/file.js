let nav = document.getElementById("nav");
let navBtn = document.getElementById("nav-btn");
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

bgImageChnage()