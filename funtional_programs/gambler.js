var readlineSync= require("readline-sync");
console.log("*****Gambler*****");
let gamblerObj=require("./utility/gamblerUtils");
var stakeAmountTemp= readlineSync.question("Enter the stake Amount ");
var goalAmountTemp=readlineSync.question("Enter the goal Amount ");
var maxTrialsTemp=readlineSync.question("Enter the max no of trials gambler can have ");
var stakeAmount=parseInt(stakeAmountTemp);
var goalAmount=parseInt(goalAmountTemp);
var maxTrials=parseInt(maxTrialsTemp);
if(goalAmount>stakeAmount && goalAmount!==0 && stakeAmount!==0){
    if(goalAmount===stakeAmount){
        console.log("you dont need to bet")
    }
    else
        var ga = gamblerObj.playGambler(parseInt(stakeAmount), parseInt(goalAmount), parseInt(maxTrials));
}
else{
    console.log("Value errors");
    console.log(ga);
    console.log(parseInt(stakeAmount), typeof(stakeAmount));
    console.log(parseInt(goalAmount), typeof(goalAmount));
    console.log(parseInt(maxTrials), typeof(maxTrials));


}