var readlineSync = require('readline-sync');
var t = readlineSync.question('What is the temperture in (F)? '); 
var v = readlineSync.question('What is the velocity of wind in (MpH)? '); 
var w;
if(t<=50 && v<=120 && v>=3){
    w= 35.74+(0.6215*t)+((0.4275*t)-(35.75))* Math.pow(v,0.16);
    console.log("the wind chill is " + w);
}
else {
    console.log("check the limits for v and t");
}