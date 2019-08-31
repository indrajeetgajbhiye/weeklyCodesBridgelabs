class PrimeChecker {
    constructor() {
        this.primeArray = new Array(10);
    }
    primePrinter(lowerLimit, upperLimit, line) {
        var tempArray = [];
        var arrCount = 0;
        tempArray[arrCount++] = lowerLimit;
        tempArray[arrCount++] = upperLimit;
        if (lowerLimit % 2 == 0) {
            lowerLimit++;
        }
        if (lowerLimit <= 2) {
            lowerLimit = 3;
            arrCount = 2;
            tempArray[arrCount] = 2;
            arrCount++;
        }
        for (var i = lowerLimit; i <= upperLimit; i = i + 2) {
            var flag = 0;
            for (var j = 2; j <= i / 2; j++) {
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
        this.primeArray[line] = tempArray;

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