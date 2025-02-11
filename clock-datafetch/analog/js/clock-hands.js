const sec_hand = document.querySelector(".s");
const min_hand = document.querySelector(".m");
const hour_hand = document.querySelector(".h");
const hand = document.querySelector(".hand");
//analog clock
//find start point of given time
function timeplacer(time = new Date()){
    let current_hour = time.getHours();
    let current_min = time.getMinutes();
    let current_seconds = time.getSeconds();
    sec_hand.style.transform = `rotate(${6*current_seconds}deg)`;
    min_hand.style.transform = `rotate(${6*current_min}deg)`;
    hour_hand.style.transform = `rotate(${Math.floor(0.5*current_min) + 30*current_hour}deg)`;
}
let analog_interval;
let digital_interval;
//digital clock
const digital = document.querySelector("#digital");
function digdate(time = new Date()){
    digital.innerHTML = time.toTimeString().slice(0, 8);    
}
runtheclock();

//for start and pause button
const run = document.querySelector("#run");
const pause = document.querySelector("#stop");
function runtheclock(){
    timeof = false;
    startandstop(timeof);
}
run.addEventListener('click', runtheclock);
function stoptheclock(){
    timeof = true;
    hand.style.animation = "5s ease-in-out 2s"
    startandstop(timeof);
}
pause.addEventListener('click', stoptheclock);
function startandstop(timeof){
    if(timeof){
        clearInterval(analog_interval);
        analog_interval = null;
        clearInterval(digital_interval);
        digital_interval = null;
    }else{
        analog_interval = setInterval(timeplacer, 1000);
        digital_interval = setInterval(digdate, 1000);
        timeplacer();
        digdate();
    }
}

//dragthehands
const circle = document.querySelector(".circle");
const rad = circle.getBoundingClientRect();
const rx = rad.x;
const ry = rad.y;
let mouseactive = false;
let handofs;
function takelements(hand){
    const date = new Date();
    if(hand === hour_hand){
        handofs = hour_hand;       
    }else if(hand === min_hand){
        handofs = min_hand;        
    }else if(hand === sec_hand){
        handofs = sec_hand;        
    }
    mouseactive = true;
}
function rotatelements(hand, event){
    if(mouseactive === true){
        stoptheclock();
        const date = new Date();
        let mouseX = event.clientX;
        let mousey = event.clientY;
        let sidex = mouseX-rx;
        let sidey = mousey-ry;
        let angmouse = 180*(Math.atan(sidex/sidey)/Math.PI);
        if(sidey === 0){
            if(sidex>0){
                angmouse = 90;
            }else{
               angmouse = 270; 
            }
        }else if(sidey>0){
            if(sidex<0){
                angmouse = angmouse + 360;
            }
        }else if(sidey<0){
            angmouse = angmouse + 180;
        }
        let anghand;
        if(handofs === hour_hand){
            anghand = Math.floor(0.5*date.getMinutes()) + 30*date.getHours();
            hour_hand.style.transform =  `rotate(${anghand-angmouse-180}deg)`;
        }else if(handofs === min_hand){
            anghand = 6*date.getMinutes();
            min_hand.style.transform = `rotate(${6*Math.floor((anghand-angmouse)/6)-180}deg)`;
        }else if(handofs === sec_hand){
            anghand = 6*date.getSeconds();
            sec_hand.style.transform = `rotate(${6*Math.floor((anghand-angmouse)/6)-180}deg)`      
        }
    }    
}
function puttheelements(){
    mouseactive = false;
    runtheclock();
}
