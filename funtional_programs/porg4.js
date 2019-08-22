function factorial(num) {
    var nextNum = num - 1;
 
    if (num === 1) {
        return num; // return 1;
    }
    return 2 * factorial(nextNum);
}

console.log(factorial(5));