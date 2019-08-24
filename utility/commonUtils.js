let readlineSync = require('readline-sync');
module.exports = {
    inputFunction : function(sentence){
        var inputValue = readlineSync.question(sentence);
        return parseInt(inputValue);
    },
    inputFunctionFloat : function(sentence){
        var inputValue = readlineSync.question(sentence);
        return parseFloat(inputValue);
    },
    inputFunctionString : function(sentence){
        var inputValue = readlineSync.question(sentence);
        return inputValue;
    }
}