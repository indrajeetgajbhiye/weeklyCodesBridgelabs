let item = require('./utility/inventoryUtils');
var inventoryManager= new item.InventoryManager();
function main()
{
    var inventory = inventoryManager.inventoryFactory('./jsonFiles/inventory.json');
    var arraynew = [];
    inventoryManager.write('./jsonFiles/inventoryOutput.json', arraynew, inventory);
}
main();