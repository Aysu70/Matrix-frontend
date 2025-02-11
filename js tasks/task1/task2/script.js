let vaxt='20:03';
vaxt=Number(vaxt.slice(0,2));
console.log(vaxt);
if(vaxt<=3 || vaxt>=22){
    console.log('geceniz xeyir');
}else if(vaxt<=12){
    console.log('sabahiniz xeyir');
}else if(vaxt<=17){
    console.log('gunortaniz xeyir');
}else{
    console.log('axsaminiz xeyir');
}

switch(true){
    case vaxt<=3 || vaxt>=22:
        console.log('geceniz xeyir');
        break;
    case vaxt<=12:
        console.log('sabahiniz xeyir');
        break;
    case vaxt<=17:
        console.log('gunortaniz xeyir');
        break;
    default:
        console.log('axsaminiz xeyir') 
}

try {
    if(vaxt<=3 || vaxt>=22) throw "geceniz xeyir";
    if(vaxt<=12) throw "sabahiniz xeyir";
    if(vaxt<=17) throw "gunortaniz xeyir";
    if(vaxt<22) throw "axsaminiz xeyir";
  }
  catch(err) {
    console.log(err)
  }