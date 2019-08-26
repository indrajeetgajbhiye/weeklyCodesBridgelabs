var readline = require('readline-sync');
let anagramObj=require('../utility/anagramUtils');
var str1 = readline.question("Enter string 1: ");
var str2 = readline.question("Enter string 2: ");
anagramObj.checkAnagram(str1, str2);