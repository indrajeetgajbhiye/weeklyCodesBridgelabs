var readlineSync = require('readline-sync');
var permutationObj = require ('../utility/permuteUtils');
var main = function(){
    var string = readlineSync.question('Enter the String');
    var permutations = permutationObj.permut(string);
    console.log(permutations);
}
main();