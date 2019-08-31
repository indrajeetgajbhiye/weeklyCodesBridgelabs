class PrimeChecker {
    constructor() {
        this.primeAnagramArray = new Array(10);
        this.anaCounter = 2;
        this.primeArray = new Array(10);
        this.primeCounter = 2;
    }
    checkAnagram(num1, num2, line) {
        var string1 = num1.toString();
        var string2 = num2.toString();
        console.log('  ',str1, '  ',str2);
        if (string1.length == string2.length) {
            var str1= string1.toLowerCase().split('').sort().join('').trim();
            var str2= string2.toLowerCase().split('').sort().join('').trim();
            if (str1 === str2){
                this.primeAnagramArray[line][this.anaCounter]=num1;
                this.anaCounter+=1;
                this.primeAnagramArray[line][this.anaCounter]=num2;
                this.anaCounter+=1;
            }
            else{
                this.primeArray[line][this.primeCounter]=num1;
                this.primeCounter+=1;
                this.primeArray[line][this.primeCounter]=num2;
                this.primeCounter+=1;
            }
        }
        else{
            this.primeArray[line][this.primeCounter]=num1;
            this.primeCounter+=1;
            this.primeArray[line][this.primeCounter]=num2;
            this.primeCounter+=1;
        }
            
    }
    primePrinter(lowerLimit, upperLimit, line){
        var tempArray = [];
        var arrCount = 0;
        if (lowerLimit % 2 == 0 && lowerLimit != 2) {
            lowerLimit++;
        }
        if (lowerLimit == 1 ) {
            lowerLimit=2;
        }
        if (lowerLimit == 2){
            lowerLimit = 3;
            tempArray[arrCount] = 2;
            arrCount++;
        }
        for (var i = lowerLimit; i <= upperLimit; i = i + 2) {
            var flag = 0;
            for (var j = 0; j <= i / 2; j++) {
                if ((i % j) == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                tempArray[arrCount] = i;
                arrCount++;
            }
        }
        this.primeAnagramArray[line] = new Array();
        this.primeArray[line] = new Array();
        // this.primeAnagramArray[line][0] = lowerLimit;
        // this.primeAnagramArray[line][1] = upperLimit;
        // this.primeArray[line][0] = lowerLimit;
        // this.primeArray[line][1] = upperLimit;
        
        for(var i=0; i<tempArray.length;i++){
            for(var j = i+1;j<tempArray.length;j++){
                this.checkAnagram(tempArray[i],tempArray[j], line);
            }
        }
        console.log("anagram",this.primeAnagramArray[line]);
        console.log("prime",this.primeArray[line]);
        this.primeCounter= 0;
        this.anaCounter = 0;
    }
    printArray() {
        var arrText = '';
        for (var i = 0; i < this.primeArray.length; i++) {
            for (var j = 0; j < this.primeArray[i].length; j++) {
                if (j == 0) {
                    arrText = arrText + this.primeArray[i][j].toString() + " to ";
                }
                else if(j == 1){
                    arrText = arrText + this.primeArray[i][j].toString() + " : ";
                }
                else {
                    arrText += this.primeArray[i][j].toString() + " ";
                }
            }
            console.log(arrText);
            arrText = '';
        }
    }
}
module.exports = {
    PrimeChecker,
}