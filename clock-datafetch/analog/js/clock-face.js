const clock_face = document.querySelector("#clockface");
const ctx = clock_face.getContext("2d");
//clock border
ctx.beginPath();
ctx.arc(150, 150, 150, 0, 2*Math.PI);
ctx.fillStyle = "#6c83f1";
ctx.strokeStyle = "#6c83f1";
ctx.fill();
ctx.stroke();
//clock inside
ctx.beginPath();
ctx.strokeStyle = "#6c83f1";
ctx.arc(150, 150, 138, 0, 2*Math.PI);
//clock shadow
const grad=ctx.createRadialGradient(150,150,120,150,150,150);
grad.addColorStop(0,"#465299");
grad.addColorStop(1,"#052659");
ctx.fillStyle = grad;
ctx.fill();
ctx.stroke();
//clock lines and numbers
const r = 134;
let y = 150;
let x = 150;
for(let a = 6;a<=360; a=a+6){
    let angle = a*Math.PI/180; 
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);
    ctx.beginPath();
    if(a/30-Math.round(a/30)===0){
        ctx.moveTo(x + (r-15)*sin,y - (r-15)*cos);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "white";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = "bolder 20px Ariel";
        ctx.fillStyle = "white";
        ctx.fillText(a/30, x + (r-30)*sin,y - (r-30)*cos );
    }else{
        ctx.moveTo(x + (r-10)*sin,y - (r-10)*cos);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "white";
    }
    ctx.lineTo(x + r*sin,y - r*cos);
    ctx.stroke();
}
