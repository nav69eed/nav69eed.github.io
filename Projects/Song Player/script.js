let progress = document.querySelector('.progress')
let song = document.querySelector('.song')
let ctrlbtn = document.querySelector('.playbtn')
let stime = document.querySelector('.s-time')
let etime = document.querySelector('.e-time')
let jumf = document.querySelector('.jumpf')
let jumb = document.querySelector('.jumpb')
// console.log(progress)
// console.log(song)
// console.log(ctrlbtn)
   song.addEventListener('loadedmetadata',()=>{
    song.pause();
    progress.value = song.currentTime;
    progress.max = song.duration;
    t=song.duration;
    t=parseInt(t);
    m=Math.floor(t/60);
    s=Math.floor(t%60);
    etime.textContent=`${m}:${s}`;
   })
function playpause() {
    if (ctrlbtn.classList.contains("icofont-ui-play")) {
        // console.log("hiiiii")
        ctrlbtn.classList.remove("icofont-ui-play")
        ctrlbtn.classList.add("icofont-ui-pause")
        song.play();
    }
    else {
        // console.log("hiiiii")
        ctrlbtn.classList.remove("icofont-ui-pause")
        ctrlbtn.classList.add("icofont-ui-play")
        song.pause();
    }

};
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
        let s=parseInt(song.currentTime);
        t=Math.floor(s/60);
        s=Math.floor(s%60);
        stime.textContent=`${t}:${s}`;
        if (song.currentTime>=song.duration) {
            ctrlbtn.classList.remove("icofont-ui-pause")
            console.log('clll')
                ctrlbtn.classList.add("icofont-ui-play")
        
        }
    }, 1000)
}
progress.onchange=function(){
    song.play();
    ctrlbtn.classList.remove("icofont-ui-play")
        ctrlbtn.classList.add("icofont-ui-pause")
        song.play();
    song.currentTime=progress.value;
}
jumf.addEventListener('click',()=>{
    if ((song.currentTime+10)>=song.duration) {
        song.currentTime=song.duration;
    }
    else{
        song.currentTime=song.currentTime+10;
    }
    song.play();
    ctrlbtn.classList.remove("icofont-ui-play")
        ctrlbtn.classList.add("icofont-ui-pause")
        song.play();
})
jumb.addEventListener('click',()=>{
    if ((song.currentTime-10)<=0) {
        song.currentTime=0;
    }
    else{
        song.currentTime=song.currentTime-10;
    }
    song.play();
    ctrlbtn.classList.remove("icofont-ui-play")
        ctrlbtn.classList.add("icofont-ui-pause")
        song.play();
})
