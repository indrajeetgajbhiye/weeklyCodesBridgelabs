let fs = require('fs');
class StockAccount{
    constructor(){
    }
    read(filename){
        let rawdata = fs.readFileSync(filename, 'utf-8');
        var stocks = JSON.parse(rawdata);
        for(var i=0;i<stocks.lenght;i++){
            console.log("You have Stock of "+stocks[i].stockName+" price "+ stocks[i].sharePrice +" numbers "+ stocks[i].numberOfShares);       
        }
        return stocks;
    }
    buy(amount, name, stocks){
        console.log(name);
        for(var i=0; i<stocks.length ; i++){
            if(stocks[i].stockName == name){
                console.log(stocks[i].stockName);
                stocks[i].numberOfShares = stocks[i].numberOfShares + amount;
            }
        }
        return stocks;
    }
    sell(amount, name, stocks){
        for(var i=0; i<stocks.length ; i++){
            if(stocks[i].stockName == name){
                if(stocks[i].numberOfShares>= amount){
                    stocks[i].numberOfShares = stocks[i].numberOfShares - amount;
                }
            }
        }
        return stocks;
    }
    save(filename, stocks){
        var outputString=JSON.stringify(stocks, null, 2);
        fs.writeFile(filename,outputString, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("File saved successfully!");
        });
    }
}
module.exports = {
    StockAccount
}