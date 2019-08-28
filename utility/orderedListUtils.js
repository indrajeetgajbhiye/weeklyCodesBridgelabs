var fs =  require('fs');
let bubbleSort = require('../utility/bubbleSortUtils');
var separators = [' ', '\n', ',', 'NaN',"0,"];
var file = fs.readFileSync('../fileRead/orderedList.txt', 'utf-8').split(new RegExp(separators.join('|'), 'g'));
class OrderList{
    contructor(){      
        console.log('***** reading file *****'); 

    }
    convertIntoNumbers(){
        var list = [];
        for (i in file){
            var temp = Number(file[i]);
            console.log(typeof(temp), temp);
            list[i] = temp;
        }
        console.log(bubbleSort.bubbleSort(list));
        console.log(list);
        fs.writeFileSync('../fileRead/orderedList.txt', list);
    }
}