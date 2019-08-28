linkedList = require('linkedList');
var linkObj = new linkedList.linkList()
add = function(wordGet){
    wordGet = this.wordGet;
    linkObj.add(wordGet);
}
printFile = function(){
    linkObj.printList();
}
printList();