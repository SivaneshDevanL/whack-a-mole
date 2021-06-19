const grid=document.getElementsByClassName("square")
let lastOne
let startTime
let elapsedTime=0
var timer
let score=0


function start(){
    startTime=Date.now()-elapsedTime
        const hole=randomhole(grid)
    hole.className="mole"
    hole.addEventListener("click",scorefunc)
    timer=setTimeout(function setimage(){
        hole.className="square"
         elapsedTime=Date.now()-startTime
         let text=timetostring(elapsedTime)
         if(text=='-1'){
             reset()
         }
         else{
        document.getElementById("time-left").innerText=text
        start()}
    },1000)
}
function timetostring(time){
    let timeinhr=time/3600000
    let hh=Math.floor(timeinhr)
    let timeinmin=(timeinhr-hh)*60
    let mm=Math.floor(timeinmin)
    let timeinsec=(timeinmin-mm)*60
    let ss=Math.floor(timeinsec)
    ss=20-ss
    let fss=ss.toString().padStart(2,"0") 
    return `${fss}`
}
function randomhole(){
    const id=Math.floor(Math.random()*grid.length)
    const hole=grid[id]
    if(hole==lastOne) return randomhole()
    lastOne=hole
    return hole
}
function reset(){
    clearTimeout(timer)
    document.getElementById("final").className="n"
    document.getElementById("fscore").innerText=score
    document.getElementById("score").innerText=""
    document.getElementById("time-left").innerText=""
    setTimeout(function time(){
        document.getElementById("final").className="fin"
        document.getElementById("score").innerText=0
        document.getElementById("time-left").innerText=20
    },1000)
    elapsedTime=0
    score=0
    const e=document.getElementsByClassName("mole")[0]
    e.className="square"
}

function scorefunc(){
    if($(this).hasClass("mole")){
    score++
    document.getElementById("score").innerText=score}
}
