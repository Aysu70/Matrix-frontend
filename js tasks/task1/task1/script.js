let age=32;

if (age<0){
    alert('it is supposed to be positive');
}else if(age<=3){
    let answer='korpe';
    console.log(answer);
}else if(age<=13){
    let answer='usaq';
    console.log(answer);
}else if(age<=18){
    let answer='yeniyetme';
    console.log(answer);
}else if(age<=35){
    let answer='genc';
    console.log(answer);
}else if(age<=55){
    let answer='orta yasli';
    console.log(answer);
}else if(age<=90){
    let answer='yasli';
    console.log(answer);
}else{
    let answer='mermer';
    console.log(answer);
}
let y;
switch(true){
    case age<=3 :
        y='korpe';
        break;
    case age<=13 :
        y='usaq';
        break;
    case age<=18 :
        y='yeniyetme';
        break;
    case age<=35 :
        y='genc';
        break;
    case age<=55:
        y='orta yasli';
        break;
    case age<=90 :
        y='yasli';
        break;
    default :
        y='mermer';
}
console.log(y)

try {
    if(age<=3) throw "korpe";
    if(age<=13) throw "usaq";
    if(age<=18) throw "yeniyetme";
    if(age<=35) throw "genc";
    if(age<=55) throw "orta yasli";
    if(age<=90) throw "yasli";
    if(age>90) throw "mermer";
  }
  catch(err) {
    console.log(err)
  }