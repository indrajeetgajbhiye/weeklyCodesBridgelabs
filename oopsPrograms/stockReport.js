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