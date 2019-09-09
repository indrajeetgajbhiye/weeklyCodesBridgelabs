var fs = require('fs');
var readlineSync = require('readline-sync');
/**
 * reading data from a json file
 */
var data = fs.readFileSync('./jsonFiles/inventoryManagement.json');
console.log("Data in a json file is\n" + data);
var arrayOfObjects = JSON.parse(data);
console.log(" ");
var totalPrice = 1;
function insertItem(num){
    for (var i = 0; i < num; i++) {
        try {
            var Name = readlineSync.question("Please enter the item you want to add: ");
            if (!isNaN(Name)) throw "invalid input"
            var weight = readlineSync.question("Please enter the number of Kgs: ");
            if (isNaN(weight)) throw "invalid input"
            var price = readlineSync.question("Please enter the price per Kg.: ");
            if (isNaN(price)) throw "invalid input"
        } catch (err) {
            console.log(err);
        }
        if (nameRestriction.test(Name) && isNaN(weight) != -1 && isNaN(price) != -1) {
            arrayOfObjects.push({
                stockName: Name,
                Number_of_Kgs: weight,
                Price: price
            })
        }
        else {
            console.log("Invalid input for name,weight and price!");
            return false;
        }
        console.log(arrayOfObjects);
        console.log("");
        /**
         * calculating total price
         */
        totalPrice = parseInt(num) * parseInt(price);
        console.log("");
        /**
         * calculating the total price for new shares
         */
        console.log("The total price of the stock is " + totalPrice);
        /**
         * writing arrayOfObjects on json file
         */
        fs.writeFileSync('./jsonFiles/inventoryManagement.json', JSON.stringify(arrayOfObjects, null , 2), 'utf-8', function () { console.log('done') });
        /**
         * reading json file after insertion
         */
    }
    var data = fs.readFileSync('./jsonFiles/inventoryManagement.json', 'utf-8');
    console.log("after insertion data is\n" + data);
}
function deleteItem(del){
    var flag = 0;
    for (var i = 0; i < arrayOfObjects.length; i++) {
        if (del == arrayOfObjects[i].stockName) {
            var index = arrayOfObjects.indexOf(arrayOfObjects[i]);
            arrayOfObjects.splice(index, 1);
            flag = 1;
            break;
        }
        else {
            flag = 0;
        }
    }
    if(flag == 1){
        console.log("after deletion data is");
        arrayOfObjects.forEach(element => {
            console.log(element);
        });
        fs.writeFileSync('./jsonFiles/inventoryManagement.json', JSON.stringify(arrayOfObjects, null , 2), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!');
        })
    }
    else {
        console.log('Data not Found');
    }
}

module.exports = {
    insertItem,
    deleteItem
}