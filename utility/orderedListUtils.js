/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.
*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed
*/
/******************************************************************************************************************
 *  Execution       :   ../dataStructure/ $ node orderedList.js
 * 
 * 
 *  Purpose         :   Saving the needed set of function definition 
 * 
 * @description     
 *  
 * @file            :   orderedListUtils.js
 * @overview        :   Required class to generate ordered list of numbers
 * @module          :
 * @author          :   Indrajeet Gajbhiye indrajetgajbhiye@gmail.com
 * @version         :   
 * @since           :   29-08-2019
 * 
 * 
 ********************************************************************************************************************/
/**
 * 
 * The module.exports or exports is a special object which is included in every JS file in the Node.js application by default.
 *  
 * module is a variable that represents current module and exports is an object that will be exposed as a module. 
 * 
 * So, whatever you assign to module.exports or exports, will be exposed as a module.
 */
/**
 * @description to use file reading and write functions
 * @var {*fs} fs 
 */
var fs =  require('fs');
/**
 * @let filePath {string}
 */
let filePath = '../fileRead/orderedList.txt';
/**
 * @description to import all the exported objects from a file 
 * @let {*readline-sync} readlineSync
 * @let {*../utility/bubbleSortUtils} bubbleSort
 * @let {*../utility/linkedList}
 */
let readlineSync = require('readline-sync');
let bubbleSort = require('../utility/bubbleSortUtils');
let linkedList = require('../utility/linkedList');
/**
 * @let {Obj linkedList.linkList} long 
 * @var {Array} separators
 * @let {} text
 */
let long = new linkedList.linkList();
var separators = [' ','\n',",",'NaN','0,','\,'];
let text ; 
/**
 * @class {} Orderlist
 */
class OrderList{
/**
 * @function {} constructor 
 * @description prints the start
 */
    constructor(){      
        console.log('***** Program Strated *****'); 
    }
    readFileFrom(){
        return fs.readFileSync(filePath, 'utf-8').split(new RegExp(separators.join('|'), 'g'));
    }
/**
 * @description read write and convert the text into numbers before sorting
 * @function convertIntoNumbers()
 */
    convertIntoNumbers(){
/**
 * @var {} list 
 * @description creating a black array 
 */
        var list = [];
/**
 * @var {} file 
 * @function fs.readFileSync)().split()
 * @param {text} filename 
 * @param {text} unicoding 
 * @param {string} separators 
 * @description stores all the file data in the @var file splitted by the separaters
 */
        var file = this.readFileFrom();
/**
 * @description transerferring the all the seperated data into the array list in form of number 
 *              for precaution measures created temp
 */
        for(var i = 0; file[i]!= null ;i++){
/**
 * @function {string} Number converts the string into number { not very strict }
 * @suggestion use @function {string} parseInt @function {string} parseFloat in strict use
 */ 
            var temp = Number(file[i]);
            list[i] = temp;
        }
/**
 * @function bubbleSort.bubbleSort(Array)
 * @description takes @var list as argument and returns the sorted @var list
 */
        bubbleSort.bubbleSort(list);
/**
 * @function writeIntoFile(list) takes the sorted @var list as argument
 */
        this.writeIntoFile(list);
        return list
    }   
/**
 * 
 * @param {*} text 
 * @description this function writes the content of text into file using synchronous function
 * @function writeFileSync("filePath",) 
 */
    writeIntoFile(text){
        fs.writeFileSync(filePath, text);
        return true;
    }
/**
 * @function takeInput() gives a number as return type
 */
    takeInput(){
        var number = readlineSync.question('input a number');
        try{
/**
 * @description checking the number is number or not
 */
        if(isNaN(number) == true) {
            this.takeInput();
        }
        else throw number;
        }
        catch(err){
            return err;
        }
    }
    addNumber(){
/**
 * @var file
 * @description saving content of file into @var file
 */
        var file = this.readFileFrom();
/**
 * @description adding every element in file to linkedList
 */
        for(var i = 0; file[i]!= null ; i++){
            long.add(file[i]);
        }
        var number = this.takeInput();
        long.add(number);
        console.log('after adding')
/**
 * @var text is string as the @function long.printList() returns a string
 */
        text = long.printList();
/**
 * @param {'string'} text 
 * @function writeIntoFile(text)
 */
        this.writeIntoFile(text);
        text = this.convertIntoNumbers();
    }
}
/**
 * @exports modules named @class OrderList
 */
module.exports = {
    OrderList,
}