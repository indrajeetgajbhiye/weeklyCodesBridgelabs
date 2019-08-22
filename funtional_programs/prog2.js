var knock="y";
var h=0,t=0,cData;
while(knock=="y"){
    cData=Math.random();
    if(cData<0.5){
        t=t+1;
    }
    else {
        h=h+1
    }
    knock=null;
    console.log("probability of heads= "+ h/(h+t) +"  and the tails are " + t/(t+h));
    var readline = require('readline');

    var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("press y to continue ", function(answer) {
    // TODO: Log the answer in a database
    knock=answer;
    rl.close();
    });
}