var readLineSync = require('readline-sync');
var knock=Math.random();
var count = 1;
if(knock<0.5){
    knock=1;
}
else {
    knock=0;
}
var ticTacArray= [
    ["*","*","*"],
    ["*","*","*"],
    ["*","*","*"]
],arrText='';
let player = require("./utility/utility.js");
if(knock==1){
    player.playTicTac(ticTacArray, knock, count);    
}
else{
    player.autoPlay(ticTacArray, knock, count);
}
