let palindromeUtils = require('../utility/palindromeUtils');
let common = require('../utility/commonUtils');
function main (){
    var word = common.inputFunctionString('Give the input: ');
    var answer = palindromeUtils.palChecker(word);
    console.log(answer);
}
main();