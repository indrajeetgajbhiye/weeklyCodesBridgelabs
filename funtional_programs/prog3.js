var myArgs = process.argv.slice(2);
var answer= myArgs[0];

if(answer%100==0){
    if(answer%400==0){
        console.log("its a leap year");
    }
    else{
        console.log("its not a leap year");
    }
}
else{
    if(answer%4==0){
        console.log("its a leap year");
    }
    else{
        console.log("its not a leap year");
    }
}