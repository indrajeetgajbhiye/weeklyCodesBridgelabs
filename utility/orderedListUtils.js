var fs =  require('fs');
let readlineSync = require('readline-sync');
let bubbleSort = require('../utility/bubbleSortUtils');
let linkedList = require('../utility/linkedList')
let long = new linkedList.linkList();
// let list = new linkedList.linkList();
var separators = [' ', '\n', ',', 'NaN',"0,"];
var file = fs.readFileSync('../fileRead/orderedList.txt', 'utf-8').split(new RegExp(separators.join('|'), 'g'));
class OrderList{
    contructor(){      
        console.log('***** reading file *****'); 
        //this.convertIntoNumbers();
    }
    convertIntoNumbers(){
        var list = [];
        for(var i = 0; file[i]!= null ;i++){
            var temp = Number(file[i]);
            //console.log(typeof(temp), temp);
            list[i] = temp;
        }
        console.log(bubbleSort.bubbleSort(list));
        console.log(list);
        //fs.writeFileSync('../fileRead/orderedList.txt', list);
        this.writeIntoFile(list);
        return "my name";
    }   
    writeIntoFile(list){
        fs.writeFileSync('../fileRead/orderedList.txt', list);
        return true;
    }
    takeInput(){
        var number = readlineSync.question('input a number');
        this.addNumber(number);
    }
    addNumber(number){
        long.printList();
        long.add(number);
        long.printList();
    }
}

module.exports = {
    OrderList,
}