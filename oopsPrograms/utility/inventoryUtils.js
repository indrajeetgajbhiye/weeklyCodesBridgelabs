let fs = require('fs');
class Inventory{
    constructor(){
        this.name = '';
        this.totalPrice = 0;
    }
}
class InventoryManager{
    constructor(){}
    inventoryFactory(inputfilename){
        let rawdata = fs.readFileSync(inputfilename, 'utf-8');
        var inventory = JSON.parse(rawdata);
        for(var i=0;i<inventory.length;i++){
            console.log("You have "+inventory[i].name+" price "+ inventory[i].price +" numbers "+inventory[i].quantity);       
        }
        return inventory;
    }
    write(outputFilename, newData, inventory){
        for(var i =0; i<inventory.length; i++){
            newData[i] = new Inventory();
            newData[i].name = inventory[i].name;
            newData[i].totalPrice = inventory[i].quantity * inventory[i].price;
        }
        var outputString=JSON.stringify(newData, null, 2);
        fs.writeFile(outputFilename,outputString, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("File saved successfully!");
        });
    }
}
module.exports = {
    Inventory,
    InventoryManager
}