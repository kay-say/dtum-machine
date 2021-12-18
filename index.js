//pad
const pads=document.querySelectorAll(".pad")
function playSound(clip){
    document.querySelectorAll(".clip").forEach(clip=>clip.pause())
    clip.currentTime=0;
    clip.play()
}
function displayText(text){
    console.log(text)
    document.querySelector("#display").textContent=text
}
function lightEffect(pad){
    pads.forEach(pad=>pad.style.animation="none")
    pad.style.animation = "light-effect 700ms ease"; 
}
function callBack(e){
    let clip, text, pad
    if(e.key){
        clip=document.querySelector(`.clip#${e.key.toUpperCase()}`)
        pad=clip.parentElement
        text=clip.parentElement.id
    }else{
        clip=document.querySelector(`.clip#${e.target.innerText}`)
        pad=e.target
        text=e.target.id
    }
    displayText(text)
    playSound(clip)
    lightEffect(pad)
}
pads.forEach(pad=>pad.addEventListener("click",callBack))
document.addEventListener("keypress", callBack)

//power 
let powerOn=true
const powerTab=document.querySelector(".circle-wrapper")
powerTab.addEventListener("click",()=>{
    document.querySelector(".circle").classList.toggle("slide")
    if(powerOn){
        pads.forEach(pad=>pad.removeEventListener("click",callBack))
        document.removeEventListener("keypress", callBack)
        powerOn=false
    }else{
        pads.forEach(pad=>pad.addEventListener("click",callBack))
        document.addEventListener("keypress", callBack)
        powerOn=true
    }
})