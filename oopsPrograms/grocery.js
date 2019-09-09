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
/**
 * @var {} grocery 
 * @description to import the file from ./utility/groceryUtils in grocery 
 */
var grocery = require("./utility/groceryUtils");
/**
 * @var {} newData
 * @description array of 3 elements is created
 */
var newData = new Array();
/**
 * @var {object} data
 * @description creating the object from class JsonData  
 */
var data = new grocery.JsonData();
/**
 * @var {object array} inventory 
 * @description get all the data after reading the JSON file in inventory  
 */
var inventory  = data.read('./jsonFiles/food.json');
/**
 * @description write the data in another json file
 */
data.write("./jsonFiles/outputFood.json", newData, inventory);
