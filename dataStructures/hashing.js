const input=require("readline-sync");
const HashingObject = require('../utility/linkedList');
var separators = [' ','\n',',','NaN','0,','\r'];
const fs=require('fs');
//const Linkedlist=require("../unorderedList/list")
var text=fs.readFileSync("../fileRead/hashingInputFile.txt", "utf-8"); // reading the input file
var dataArray=text.split(new RegExp(separators.join('|'), 'g'));
var ar=[];
for(i=0;i<11;i++){
    ar[i]= new HashingObject.linkList();
}
var x;
console.log(dataArray);
for(i in dataArray){
    if(!isNaN(dataArray[i])){
        x=dataArray[i]%11;
        ar[x].add(dataArray[i]);
    }
}
var s=input.questionInt("Enter a number to search:");
var r=s%11;
ar[r].removeElement(s);
var str='';
for(i=0;i<11;i++){
    str=str+String(ar[i].printList())+"\n";
}
fs.writeFileSync('../fileRead/hashingOutFile.txt',str); 