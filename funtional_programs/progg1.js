
var myArgs = process.argv.slice(2);
var answer= myArgs[0];

if(answer.length>3&&answer!=null){
    console.log("Hello "+answer+ ", How are you?");
}
else{
    console.log("Name should be atleast three letters long");
}