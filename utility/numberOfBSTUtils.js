class NumberOfBST{
    constructor(){
    }
    factorial(num){
        if( num >= 1 )
            return (num * this.factorial(num-1));
        else
            return 1;
    }
    catalanNumber(number){
        var catalanNum = parseInt(((this.factorial(2 * number))) / (this.factorial(number+1) * this.factorial(number)));
        return catalanNum;
    }
}
module.exports = {
    NumberOfBST,
}