var que = require('../utility/primeNoUtils');
var prime = new que.PrimeChecker();
var upperLimit = 100;
var lowerLimit = 0;
for (var i=0; i<10;i++){
    prime.primePrinter(lowerLimit,upperLimit,i)
    lowerLimit+=100;
    upperLimit+=100;
}
prime.printArray();