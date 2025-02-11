let vaxt;
vaxt=20
budget=vaxt*3

const productOne = ['bread','water','oil']; //10
const productTwo = ['onion','milk','egg']; //20
const productThree = ['meat','cola','fruits','fish']; //40
const productFour = productOne + productTwo; //70
const productFive = productTwo+ productThree //120

// 10<=budget && budget<=20?.console.table(productOne): budget<=40?.console.table(productTwo): budget<=70?.console.table(productThree): budget<=120?.console.table(productFour):console.table(productFive);

if(10<=budget && budget<=20){
    console.table(productOne);
}else if(budget<=40){
    console.table(productTwo);
}else if( budget<=70){
    console.table(productThree);
}else if(budget<=120){
    console.table(productFour);
}else{
    console.table(productFive);
}

switch(true){
    case 10<=budget && budget<=20:
        console.table(productOne);
        break
    case budget<=40:
        console.table(productTwo);
        break
    case budget<=70:
        console.table(productThree);
        break
    case budget<=120:
        console.table(productFour);
        break
    default:
        console.table(productFive);
        break
}

try {
    if(10<=budget && budget<=20) throw productOne;
    if(budget<=40) throw productTwo
    if(budget<=70) throw productThree
    if(budget<=120) throw productFour
    if(budget>120) throw productFive
}
catch(err) {
    console.log(err)
}