/*******************************************************************************************************
 * Execution    :   default node            terminal> node grocery.js
 * 
 * Purpose      :   to learn read and write through json object
 * 
 * @description
 * 
 * @file        :   grocery.js
 * @overview    :   to read the data from one json file write customised data in another json file
 *                  
 * @author      :   Indrajeet Gajbhiye indrajeetgajbhiye@gmail.com
 * @version     :   1.0
 * @since       :   06-08-2019
*******************************************************************************************************/
let readlineSync = require('readline-sync');
let share = require('./utility/stockUtils');
var stockElement = new share.StockPortfolio();
function main(num)
{
    var  inputStocks = stockElement.read('./jsonFiles/stock.json', num);
    var arraynew = [num];
    stockElement.write('./jsonFiles/stockOutput.json', arraynew, inputStocks, num);
}
function inputfun(){
    var num = readlineSync.question("Enter the number of Stocks(upto 10)");
    if(num <=10 && num > 0){
        main(num);
    }
    else {
        console.log('Invalid number');
        inputfun();
    }
}
inputfun();