let readlineSync = require('readline-sync');
module.exports = {
    inputFunction : function(sentence){
        var inputValue = readlineSync.question(sentence);
        return parseInt(inputValue);
    },
}