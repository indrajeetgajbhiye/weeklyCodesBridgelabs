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
 * @const {} fs 
 * @description geting filestream file from fs to read and write files
 */
const fs = require('fs');
/**
 * @class JsonData
 */
class JsonData {
/**
 * @function constructor()
 */
    constructor(){
        this.name='';
        this.total=0;
    }
/**
 * @function read()
 * @description to read a json file 
 */
    read(){
/**
 * @let rawdata 
 * @description get all the data as unformatted data in rawdata from json file
 */
        let rawdata = fs.readFileSync('./jsonFiles/food.json');
/**
 * @var {} inventory 
 * @description get the json data parsed as striung objects
 */
        var inventory = JSON.parse(rawdata);
        for(var i=0;i<inventory.length;i++){
            console.log("We have "+inventory[i].weight+"kg of "+ inventory[i].name +" selling at "+inventory[i].priceperkg+" Rupees per kg");       
        }
        return inventory;
    }
/**
 * @function write
 * @param {*} newData 
 * @param {*} inventory 
 * @description write the data in the given file in format
 */
    write(newData, inventory){
        for(var i=0;i<inventory.length;i++){
/**
 * @description creating the new JsonData Object in newData[i] 
 */
            newData[i] = new JsonData();   
            newData[i].name = inventory[i].name;
            newData[i].total= inventory[i].priceperkg * inventory[i].weight
        }
/**
 * @description stringyfy the newData in outputString
 */
        var outputString=JSON.stringify(newData, null, 2);
        fs.writeFile("./jsonFiles/outputFood.json",outputString, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("File saved successfully!");
        });
    }
};
module.exports = {
    JsonData
}

