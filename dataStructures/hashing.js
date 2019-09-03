/******************************************************************************
 * Execution    :   default node            terminal> node cashCounter.js
 * 
 * Purpose      :   generate a calender when the year and month are given
 *                  
 * 
 * @description     
 * 
 * @file        :   calender.js
 * @overview    :   to genearte the calender when the year and month are given
 *                  
 * @author      :   Indrajeet Gajbhiye indrajeetgajbhiye@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/
/**
 * @const {} input
 * @const {} HashingObject
 * @description inports the exported objects
 */
const input=require("readline-sync");
const HashingObject = require('../utility/linkedList');
/**
 * @var {} separators
 * @description array of expected seperators
 */
var separators = [' ','\n',',','NaN','0,','\r'];
/**
 * @const {} fs
 * @description object to handle files
 */
const fs=require('fs');
/**
 * @var {string} text
 * @var {string} dataArray
 * @description reading file in text and the converting it into the array by split
 */
var text=fs.readFileSync("../fileRead/hashingInputFile.txt", "utf-8"); 
var dataArray=text.split(new RegExp(separators.join('|'), 'g'));
var ar=[];
/**
 * @description creating object of linkedList on each array element
 */
for(i=0;i<11;i++){
    ar[i]= new HashingObject.linkList();
}
var x;
console.log(dataArray);
/**
 * @description add the number in data array using hashing function
 */
for(i in dataArray){
    if(!isNaN(dataArray[i])){
        x=dataArray[i]%11;
        ar[x].add(dataArray[i]);
    }
}
var s=input.questionInt("Enter a number to search and remove(if present):");
var r=s%11;
ar[r].removeElement(s);
var str='';
for(i=0;i<11;i++){
    str=str+String(ar[i].printList())+"\n";
}
/**
 * @description writing in another file
 */
fs.writeFileSync('../fileRead/hashingOutFile.txt',str); 