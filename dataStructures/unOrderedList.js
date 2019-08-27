var fs =  require('fs');
let readlineSync = require('readline-sync'); 
console.log('***** reading file *****');
let link = require('../utility/linkedList');
var linkObj = new link.linkList();
var orderArray= fs.readFileSync('../fileRead/unOrderedListInputs.txt', 'utf-8').toString().split(" ");
function check(){
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
        linkObj.printList();
    }
    else {
        linkObj.printList();
    }
    fs.writeFileSync('../fileRead/unOrderedListInputs.txt', linkObj.printList());
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