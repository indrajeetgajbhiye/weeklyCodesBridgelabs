let assert = require('chai').assert;
var grocery =  require('../utility/groceryUtils');
var data = new grocery.JsonData();
var newData = [3];
var inventory  = data.read();
console.log(typeof(inventory));