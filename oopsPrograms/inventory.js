/*******************************************************************************************************
 * Execution    :   default node            terminal> node grocery.js
 * 
 * Purpose      :   to learn read and write through json object
 * 
 * @description
 * 
 * @file        :   deckOfCardsQueue.js
 * @overview    :   to read the data from one json file write customised data in another json file
 *                  
 * @author      :   Indrajeet Gajbhiye indrajeetgajbhiye@gmail.com
 * @version     :   1.0
 * @since       :   06-08-2019
*******************************************************************************************************/
let item = require('./utility/inventoryUtils');
var readlineSync = require('readline-sync');
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;
function inventoryMenu() {
    console.log(" ");
    console.log("Inventory Management-->");//menue
    console.log(" 1: Insert\n 2: Delete\n 3: Exit");
    /**
     * asking user to enter the choice
     */
    try {
        var choice = readlineSync.question("Please enter your choice: ");
        if (choice > 3 || isNaN(choice) || choice < 1) throw "invalid input"
        /**
         * Insert Operation
         */
        if (choice == '1') {
            
            try {
                var num = readlineSync.question("Enter the number of stocks ->");
                if (isNaN(num)) throw "Invalid Input";
                if(contactRestriction.test(num)== false) throw "Invalid Input";
            } catch (err) {
                console.log(err);
            }
            item.insertItem(num);
            inventoryMenu();
        }
        /**
         * Delete Operation
         */
        else if (choice == '2') {
            /**
             * asking user to enter product name
             */
            try {
                var del = readlineSync.question("Please enter the name of item you want to delete from the inventory: ");
                if(nameRestriction.test(del)== false) throw "Invalid Input";
            } catch (err) {
                console.log(err);
            }
            /**
             * deleting item from the jason file
             */
            item.deleteItem(del);
            inventoryMenu();
        }
        /**
         * Exit from stock
         */
        else (choice == '3')
        {
            process.exit();
        }
    } catch (err) {
        console.log(err);
    }
}
/**
 * calling function
 */
inventoryMenu();