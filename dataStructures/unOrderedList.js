var fs =  require('fs');
let readlineSync = require('readline-sync'); 
console.log('***** reading file *****');
let link = require('../utility/linkedList');
var linkObj = new link.linkList();
var orderArray= fs.readFileSync('../fileRead/unOrderedListInputs.txt', 'utf-8').toString().split(" ");
function check(orderArray){
    try {
        if(orderArray == false) throw 'Empty file'
        else 
            main();
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
    var wordGet = readlineSync.question("Enter the Word  :  ");
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
        if(linkObj.printList == false) throw "Empty file writing";
        else throw 'file handled correctly';
    }
    catch(err){
        return err;
    }
}
check();

module.exports = {
    main,
    check,
}