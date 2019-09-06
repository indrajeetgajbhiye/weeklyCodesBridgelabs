let readlineSync = require('readline-sync');
let share = require('./utility/stockAccountUtils');
var filename = './jsonFiles/stockAccount.json';
var stockElement = new share.StockAccount();
var stocks = stockElement.read(filename);
console.log(stocks);
function input(){
    var name =  readlineSync.question('Enter the file name : ');
    console.log(name);
    console.log(typeof(name));
    var amount = parseInt(readlineSync.question('Enter the number of stocks : '));
    var choice = readlineSync.question('Enter \n 1 to Buy \n 2 to sell \n 3 to exit  :   ');
    try{
        if(isNaN(amount)) throw "Amount is not a number";
        else if(choice>2 || choice<1) throw " choice is not valid";
        else {
            if(choice == 1 ){
                stocks = stockElement.buy(amount, name, stocks);
                console.log(stocks);
            }
            else if(choice == 2){
                stocks = stockElement.sell(amount, name, stocks);
                console.log(stocks);
            }
            else {
                return;
            }
        }
    }
    catch(err){
        console.log(err);
        input();
    }
}
input();