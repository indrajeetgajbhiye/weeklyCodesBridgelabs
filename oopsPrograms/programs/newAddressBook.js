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
let add = require("../utility/newAddressUtils");
let readlineSync = require('readline-sync');
let address = new add.Address();
function addressBook() {
    console.log("*****ADDRESS BOOK*****");
    console.log("1: Create New Address");
    console.log("2: Delete Address");
    console.log("3: Open Address Book");
    console.log("4: Exit");
    var choice = readlineSync.question("Please enter your choice: ");
    switch (parseInt(choice)) {
        case 1:
            address.createAddress();
            break;
        case 1:
            address.deleteAddress();
            break;
        case 3:
            address.openProfile();
            break;
        case 4:
            console.log("ThankYou!");
            break;
        default:
            console.log("Please enter a valid option!!");
            addressBook();
    }
}
addressBook();