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



let signBtn = document.getElementById("sign-in");
let popBox = document.getElementById('pop-box');
let black = document.getElementById('blk');
let popelement = document.querySelector(".popbox");
let logBtn = document.getElementById("login");

signBtn.addEventListener("click",()=>{
    let singData = `
    <div class="log-logo"><i class="fas fa-clipboard-check"></i></div>
    <label for="username">Username :</label>
    <input type="text" required placeholder="Username">
    <label for="password">Password :</label>
    <input type="password" name="" id="ps" required placeholder="Password">
    <label for="Email">Email :</label>
    <input type="email" name="" id="em" required placeholder="Email">
    <div class="log-btn">
        <a href="#">Creat</a>
        <a href="#" id="close">Cancle</a>
    </div>`;
    popelement.innerHTML = singData;
    black.classList.add('black-active');
    popBox.classList.add('pop-active');

    let cancleBtn = document.getElementById('close');

    cancleBtn.addEventListener("click",()=>{
        popBox.classList.remove('pop-active');
        black.classList.remove('black-active');
    })
})

logBtn.addEventListener("click",()=>{
    let singData = `
    <div class="log-logo"><i class="fas fa-clipboard-check"></i></div>
    <label for="password">Password :</label>
    <input type="password" name="" id="ps" required placeholder="Password">
    <label for="Email">Email :</label>
    <input type="email" name="" id="em" required placeholder="Email">
    <div class="log-btn">
        <a href="#">Login</a>
        <a href="#" id="close">Cancle</a>
    </div>`;
    popelement.innerHTML = singData;
    black.classList.add('black-active');
    popBox.classList.add('pop-active');

    let cancleBtn = document.getElementById('close');

    cancleBtn.addEventListener("click",()=>{
        popBox.classList.remove('pop-active');
        black.classList.remove('black-active');
    })
})

