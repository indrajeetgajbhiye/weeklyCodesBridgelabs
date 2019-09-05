const fs = require('fs');
var regexText = fs.readFileSync('./jsonFiles/regexText.txt', 'utf-8');
let rawdata = fs.readFileSync('./jsonFiles/regexId.json');
var inventory = JSON.parse(rawdata);
regexText = regexText.replace(/<<name>>/, inventory.name);
regexText = regexText.replace(/<<full name>>/, inventory.fullName);
regexText = regexText.replace(/91­xxxxxxxxxx/,inventory.contactNumber);
let date_ob = new Date();
regexText = regexText.replace(/01-01-2016/, date_ob.getDate()+'/'+date_ob.getMonth()+'/'+date_ob.getFullYear());
console.log(regexText);

