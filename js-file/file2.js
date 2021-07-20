let preBtn = document.getElementById("pre-btn");
let nexBtn = document.getElementById("nxt-btn");
let test = document.getElementById("text");
let video = document.getElementById('video');
let dis = document.getElementById('display');

let vdList = ['<embed src="https://www.youtube.com/embed/hBh_CC5y8-s" type="">',
'<embed src="https://www.youtube.com/embed/gfDE2a7MKjA" type="">',
'<embed src="https://www.youtube.com/embed/vLnPwxZdW4Y" type="">',
'<embed src="https://www.youtube.com/embed/PkZNo7MFNFg" type="">',
'<embed src="https://www.youtube.com/embed/HXV3zeQKqGY" title="YouTube video player" type="">']

let count = 0;
dis.innerHTML = `${count+1}-${vdList.length}`;


nexBtn.addEventListener('click',()=>{
    count = count + 1;
    if(count == vdList.length){
        count = 0;
    }
    dis.innerHTML = `${count+1}-${vdList.length}`;
    video.innerHTML = vdList[count];
    
})

preBtn.addEventListener('click',()=>{
    count = count -1;
    if(count == -1){
        count = 0;
    }
    dis.innerHTML = `${count+1}-${vdList.length}`;
    video.innerHTML = vdList[count];
})

