let objectof = require('../utility/orderedListUtils');
var orderClassObj = new objectof.OrderList();
orderClassObj.addNumber();
var text = orderClassObj.readFileFrom();
for(i in text){
    if(text[i]!=0)
    console.log(text[i]);
}
