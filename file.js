// let hourel = document.querySelector(".hour")
// let miniteel = document.querySelector(".minite")
// let secanel = document.querySelector(".secands")
// let ampmel = document.querySelector(".ampm")

// function updateclock(){
//     let h= new Date().getHours()
//     let m = new Date().getMinutes()
//     let s = new Date().getSeconds()
//     let ampm = "am"

//     if (h > 12) {
//         h = h-12
//         ampm = "pm"
//     }
//     hourel.innerText = h;
//     miniteel.innerText = m;
//     secanel.innerText = s;
//     ampmel.innerText = ampm;
//     setTimeout(()=>{
//         updateclock()
//     },1000)

// }
// updateclock()














let hourel = document.querySelector(".hour")
let miniteel = document.querySelector(".minite")
let secanel = document.querySelector(".secands")
let ampmel = document.querySelector(".ampm")


function updatetime(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "am"

    if(h>12){
        h = h-12
        ampm= "pm"
    }

    
    hourel.innerText = h
    miniteel.innerText = m
    secanel.innerText = s

    setTimeout(() => {
        updatetime()
    }, 1000);

}

updatetime()