var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name ", function(answer) {
  // TODO: Log the answer in a database


if(answer.length>3){
    console.log("Hello "+answer+ ", How are you?");
}
else{
    console.log("Name should be atleast three letters long");
}
rl.close();
});

console.log(answer);