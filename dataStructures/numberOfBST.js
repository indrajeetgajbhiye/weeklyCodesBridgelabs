let readlineSync = require('readline-sync')
var bstUtils = require('../utility/numberOfBSTUtils');
function takeInput(){
    var input = readlineSync.question('Enter the number of nodes');
    try{
        if(input <= 0 || isNaN(input) == true) throw 'Invalid Input'
        else throw input;
    }
    catch(err){
        if(err == 'Invalid Input'){
            console.log('Try again with valid numbers and not strings');
            takeInput();
        }
        else{
            return parseInt(input);
        }
    }
}
function main(){
    var number = takeInput();
    var bstNumber = new bstUtils.NumberOfBST();
    console.log('Tatal number of combinations are', bstNumber.catalanNumber(number));
}
main();