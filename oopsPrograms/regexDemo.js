/*******************************************************************************************************
 * Execution    :   default node            terminal> node grocery.js
 * 
 * Purpose      :   to learn read and write through json object
 * 
 * @description
 * 
 * @file        :   grocery.js
 * @overview    :   to read the data from one json file write customised data in another json file
 *                  
 * @author      :   Indrajeet Gajbhiye indrajeetgajbhiye@gmail.com
 * @version     :   1.0
 * @since       :   06-08-2019
*******************************************************************************************************/
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

