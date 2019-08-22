/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.

*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed

*/

/******************************************************************************************************************
 *  Execution       :   
 * 
 * 
 *  Purpose         :   Saving the needed set of function definition 
 * 
 * @description     
 *  
 * @file            :   Utility.js
 * @overview        :   Required file to save user defined functions for multipurpose use
 * @module          :
 * @author          :   Indrajeet Gajbhiye
 * @version         :   
 * @since           :   21-08-2019
 * 
 * 
 ********************************************************************************************************************/

/**
 * 
 * The module.exports or exports is a special object which is included in every JS file in the Node.js application by default.
 *  
 * module is a variable that represents current module and exports is an object that will be exposed as a module. 
 * 
 * So, whatever you assign to module.exports or exports, will be exposed as a module.
 */

var readlineSync = require("readline-sync");
module.exports = {


/**
 * 
 * checkRoot is function generated to calculate and categorize the roots of the quadratic equation
 * 
 * it takes three arguments all are type number
 *  
 * */

    checkRoot(a, b, c){

/**
 *  Variable delta is used to store the value of Descriminant of the equation  
 * */

        var delta = (b*b)- 4*a*c;
/**
 * 
 * Variable root1 and root2 are to store the values of roots of equation as there are two roots in
 * quadratic equation
 * 
 */
        var root1, root2;
/**
 * 
 * Checking the value of delta to find the correct roots
 */
        if(delta>0){
/**
 * In the case where delta > 0 the roots are reral and unequal
 */
            root1= (-b + Math.sqrt(delta))/2*a;

            root2= (-b - Math.sqrt(delta))/2*a;
/**
 * print the Roots 
 */

            console.log("roots are real and not equal: " + root1 + " and" + root2);
        }
/**
 * In case value of delta is 0 the roots will be real and equal
 */
        else if(delta===0){

            root1=root2= (-b)/2*a;
/**
 *  print the roots
 */
            console.log("roots are real and equal: " + root1 + " and" + root2);
        }

/**
 * 
 * when delta is less than 0 the roots are imaginary and unequal
 * 
 */
        else if(delta<0){

            console.log("roots are imaginary");

            root1=(-b)/2*a;

            root2=Math.sqrt(-delta)/2*a;
/**
 * 
 * Printing the roots in terms of i where i is root of -1
 */
            console.log("the roots are "+ root1 + "+"+ root2 +"i and "+ root1 + "-"+ root2 +"i where i = root of (-1) " );

        }
    }
    ,
/**
 * 
 * function to generate a number between 0 and 3 and return a number tic as per the generated number
 */
    randomizeInput(){

/**
 * 
 * variable autoInput takes in the value of 0 to 3 as Math.random can generate value between 0 to 1
 * 
 */
        var autoInput= 3*Math.random();  

        var tic;
/**
 * 
 * checking and categorizing the values to set tic a value
 * 
 * can use function Math.floor to eleminate decimals
 * 
 */
        if(autoInput<1){

            tic=0;

        }

        else if(autoInput>=1&&autoInput<2){

            tic=1;

        }

        else if(autoInput>=2&&autoInput<3){

            tic=2;

        }
/**
 * return value of tic to function call
 */
        return tic;
    }
,

    autoPlay(ticTacArray, knock, count){
        console.log("autoPlay Turn");
        var ticRow=this.randomizeInput();
        var ticColumn=this.randomizeInput();
        if(ticTacArray[ticRow][ticColumn]=="*" && count<10){
            ticTacArray[ticRow][ticColumn]="X";
            
            this.printTicTac(ticTacArray);
            this.findAutoWinner(ticTacArray,knock,count);
            //this.findHumanWinner(ticTacArray);
            //this.playTicTac(ticTacArray, knock, count);
            count++;
            knock=0;
        }
        else{
            console.log("Coulumn occupied");
            this.autoPlay(ticTacArray, knock, count);
        }
        
    }
,
    playTicTac(ticTacArray, knock, count){
        var ticRow = readlineSync.question('Input the value of Row '); 
        var ticColumn = readlineSync.question('Input the value of Column '); 
        if(ticTacArray[ticRow-1][ticColumn-1]=="*" && count<10){
            ticTacArray[ticRow-1][ticColumn-1]="O";
            
            this.printTicTac(ticTacArray);
            //this.findAutoWinner(ticTacArray);
            this.findHumanWinner(ticTacArray,knock,count);
            //this.autoPlay(ticTacArray, knock, count);
            count++;
            knock=0;
        }
        else if(ticRow>3 || ticRow<1 || ticColumn<1 || ticColumn > 3 ){
            console.log("Invalid Entry");
            this.playTicTac(ticTacArray, knock, count);
        }
        else{
            console.log("Coulumn occupied");
            this.playTicTac(ticTacArray, knock, count);
        }

    }
,

    printTicTac(ticTacArray){
        var arrText='';
        for (var i = 0; i < ticTacArray.length; i++) {
            for (var j = 0; j < ticTacArray[i].length; j++) {
                arrText+=ticTacArray[i][j]+' ';
            }
            console.log(arrText);
            arrText='';
        }
    }
,
    findHumanWinner(ticTacArray,knock,count){
        var j=0,i=0;
        if( count<=9){
            for(i=0,j=0;i<3,j<3;i++,j++){
                if((ticTacArray[i][j]=="O"&&ticTacArray[i][j+2]=="O"&&ticTacArray[i][j+2]=="O")||(ticTacArray[i][j]=="O"&&ticTacArray[i][j+2]=="O"&&ticTacArray[i][j+2]=="O")){
                    console.log("You are winner");
                    this.winMessage();
                    return false;
                
                }
                else {
                    this.findHumanWinner2(ticTacArray,knock,count);
                }
            }
        }

        else {
            console.log("its a draw")
            return false;
        }
    }
,
    findHumanWinner2(ticTacArray,knock,count){        
        i=0,j=0;
        if(count<=9){
            if(ticTacArray[i][j]=="O"&&ticTacArray[i+1][j+1]=="O"&&ticTacArray[i+2][j+2]=="O"){
                console.log("You are winner");
                this.winMessage();
                return false;
            
            }
            if(ticTacArray[i+2][j]=="O"&&ticTacArray[i+1][j+1]=="O"&&ticTacArray[i][j+2]=="O"){
                console.log("You are winner");
                this.winMessage();
                return false;
            
            
            }
            else
                this.autoPlay(ticTacArray,knock,count);
        }
        else{
            console.log("its a draw");
            return false;
        }
    }
,
    findAutoWinner(ticTacArray,knock,count){
        var j=0,i=0;
        if(count<=9){
            for(i=0,j=0;i<3,j<3;i++,j++){
                if((ticTacArray[i][j]=="X"&&ticTacArray[i][j+2]=="X"&&ticTacArray[i][j+2]=="X")||(ticTacArray[i][j]=="X"&&ticTacArray[i][j+2]=="X"&&ticTacArray[i][j+2]=="X")){
                    console.log("Winner is Computer");
                    this.loseMessage();
                }
                else {
                        this.findAutoWinner2(ticTacArray,knock,count);
                }
            }
        }
        else {
            console.log("its a draw");
            return false;
        }
    }
,
    findAutoWinner2(ticTacArray,knock,count){    
        i=0,j=0;
        if(count<=9){
            if(ticTacArray[i][j]=="X"&&ticTacArray[i+1][j+1]=="X"&&ticTacArray[i+2][j+2]=="X"){
                console.log("Winner is Computer");
                this.loseMessage();
            }
            if(ticTacArray[i+2][j]=="X"&&ticTacArray[i+1][j+1]=="X"&&ticTacArray[i][j+2]=="X"){
                console.log("Winner is Computer");
                this.loseMessage();
            }
            else 
                this.playTicTac(ticTacArray,knock,count);
        }
        else {
            console.log(" its a draw");
            return false;
        }
    }
,
    winMessage(){
        console.log("Congratulations");
        return false;
    }
,
    loseMessage(){
        console.log("Loser, Try again");
        return false;
    }
,   
    findTriplets(arr,n){
        var i,j,k;
        var zeroCount = 0;
        for ( i=0; i<n-2; i++) 
        { 
        for (j=i+1; j<n-1; j++) 
            { 
                for (k=j+1; k<n; k++) 
                {   
                    if (parseInt(arr[i],0)+parseInt(arr[j],0)+parseInt(arr[k],0) == 0) 
                    {    
                        zeroCount++;
                    } 
                } 
            } 
        }
        return zeroCount;
    }
}