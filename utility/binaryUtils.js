
nibbleSwap = function(number)
{   
    this.number = number;
    var newNumber = "";
    console.log(swapIt(number, newNumber));
    var numberLength=number.length;
    numberLength=8-(numberLength%8);
    if(numberLength!=8){
        for(var i=0;i<numberLength;i++)
        {
            number="0"+number;
            
        }
    }
    var ones =0;
    for(var i=0;i<newNumber.length;i++)
    {
        if(number[i]=='1')
        {
            ones++;
        }
    }
    if(ones==1)
    console.log("the number is a power of 2");
    else
    console.log("the number is not a power of 2");
    return number;
}
swapIt = function(number,newNumber){
    for(var i=0 ;i < number.length / 8 ; i++)
    {
        for(var k = 0 ; k < 4 ; k++){
        newNumber = newNumber +number[8*i+(k+4)];    
        }
        for(var k = 0 ; k < 4 ; k++){
        newNumber =newNumber +number[8*i+(k)];    
        }
    }
    var answer = parseInt( newNumber , 2 );
    return answer;
}

module.exports= {
    nibbleSwap,
    swapIt
}