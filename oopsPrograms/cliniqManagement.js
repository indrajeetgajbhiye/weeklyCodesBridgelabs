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
var readlineSync = require('readline-sync');
var utils = require('./utility/cliniqManagementUtils');
function clinique() {
        do {
            console.log("1.ADD Appointment\n2.PRINTLIST\n3.SEARCH\n4.EXIT");
            var option = readlineSync.question('Enter the option:');
            switch (parseInt(option)) {
                case 1:
                    utils.addAppointment();
                    break;
                case 2:
                    utils.printList();
                    break;
                case 3:
                    utils.searchList();
                    break;
                case 4:
                    console.log("ThankYou!");
                    break;
                default:
                    console.log("Plz enter valid option!!");
            }
        } while (option != 4);
} 
clinique();