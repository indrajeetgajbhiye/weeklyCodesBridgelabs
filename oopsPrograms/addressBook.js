let add = require("./utility/addressBookUtils");
let readlineSync = require('readline-sync');
let address = new add.Address();
function addressBook() {
    console.log("*****ADDRESS BOOK*****");
    console.log("1:Create Profile");
    console.log("2:Open Address Book");
    console.log("3:Exit");
    var choice = readlineSync.question("Please enter your choice: ");
    switch (parseInt(choice)) {
        case 1:
            address.createAddress();
            break;
        case 2:
            address.openProfile();
            break;
        case 3:
            console.log("ThankYou!");
            break;
        default:
            console.log("Please enter a valid option!!");
    }
}
addressBook();