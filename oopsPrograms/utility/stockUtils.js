let fs = require('fs');
class Stock{
    constructor(){
        this.nameOfStock = '';
        this.totalPrice = 0;
    }
}
class StockPortfolio{
    constructor(){}
    read(inputfilename, num){
        let rawdata = fs.readFileSync(inputfilename, 'utf-8');
        var stocks = JSON.parse(rawdata);
        for(var i=0;i<num;i++){
            console.log("You have Stock of "+stocks[i].stockName+" price "+ stocks[i].sharePrice +" numbers "+stocks[i].numberOfShares);       
        }
        return stocks;
    }
    write(outputFilename, newData, inputStocks, num){
        for(var i =0; i<num; i++){
            newData[i] = new Stock();
            newData[i].nameOfStock = inputStocks[i].stockName;
            newData[i].totalPrice = inputStocks[i].sharePrice * inputStocks[i].numberOfShares;
        }
        var outputString=JSON.stringify(newData, null, 2);
        fs.writeFile(outputFilename,outputString, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("File saved successfully!");
        });
    }
}
module.exports = {
    Stock,
    StockPortfolio
}