var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer));

  
if(answer.length>3){
    console.log("Hello "+answer+ ", How are you?");
}
else{
    console.log("Name should be atleast three letters long");
}
