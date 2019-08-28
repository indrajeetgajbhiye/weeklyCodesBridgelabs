var fs =  require('fs');
let readlineSync = require('readline-sync'); 
console.log('***** reading file *****');
let link = require('../utility/linkedList');
var linkObj = new link.linkList();
var separators = [' ', '\n', ',', 'NaN',"0,"];
var orderArray = fs.readFileSync('../fileRead/unOrderedListInputs.txt','utf-8').toString().split(new RegExp(separators.join('|'), 'g'));
function check(){
    try {
        if(orderArray == false) throw 'Empty file'
        else throw 'File not empty'
    }
    catch(err){
        console.log(err);
        return err;
    }
}
function main(){
    
    for(i in orderArray) {
        //console.log(orderArray[i]);
        linkObj.add(orderArray[i]);
        //console.log("value of i  ",i);
    }
    linkObj.printList();
    var wordGet = readlineSync.question("Enter the Word :");
    var flag = linkObj.removeElement(wordGet);
    if(flag == -1){
        linkObj.add(wordGet);
        var text = linkObj.printList();
    }
    else {
        var text = linkObj.printList();
    }
    fs.writeFileSync('../fileRead/unOrderedListInputs.txt', text);
    try{
        if(text == false) throw "Empty file writing";
        else throw 'file handled correctly';
    }
    catch(err){
        console.log(err);
        return err;
    }
}
var ch = check();
if( ch == 'File not empty'){
    main();
}
module.exports = {
    main,
    check,
}