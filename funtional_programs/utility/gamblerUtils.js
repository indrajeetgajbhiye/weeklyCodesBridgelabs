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
 * @file            :   gamblerUtils.js
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


module.exports={
    playGambler(stakeAmount, goalAmount, maxTrails){
        console.log("before stakeamout-- ", stakeAmount);
        console.log(typeof(stakeAmount));
        
        var winCount=parseInt(0),loseCount=parseInt(0);
        for(var i=0;i<maxTrails;i++){
            console.log("stakeAmount---- ", stakeAmount,"chance",i+1);
            typeof(stakeAmount);
            if(goalAmount==stakeAmount){
                console.log("You have won");
                console.log("Chances taken ",i+1);
                console.log("no of wins ",winCount);
                console.log("no of loses ",loseCount);
                //wincount++;
                //count++;
                return false;
            }
            if(stakeAmount<goalAmount && stakeAmount>0){
                //console.log("gambleReturn----",gambleReturn );
                 
                if(this.gamble()==parseInt(1)){
                    stakeAmount=parseInt(stakeAmount)+1;
                    winCount=parseInt(winCount)+1;
                    //count++;
                    //console.log("stakeAmount inside--", stakeAmount);
                    
                    console.log("increment");
                }
                if(this.gamble()==parseInt(-1)){
                    stakeAmount=parseInt(stakeAmount)+1; 
                    loseCount=parseInt(loseCount)+1;
                    //count++;
                  //  console.log("stakeAmount inside--", stakeAmount);

                    console.log("decrement");
                }
            }
            if(stakeAmount==0){
                console.log("gambler run out of money");
                loseCount=parseInt(loseCount)+1;
                console.log("Chances taken ",i+1);
                console.log("no of wins ",winCount);
                console.log("no of loses ",loseCount);
                return false;
            }
            if(maxTrails==i){
                console.log("Gambler run out of chances");
                loseCount=parseInt(loseCount)+1;
                console.log("Chances taken ",i+1);
                console.log("no of wins ",winCount);
                console.log("no of loses ",loseCount);
                return false;
            }
        }
         
    }
    ,
    gamble(){
        if(Math.random()>=0.5){
            return parseInt(1);
        }
        else 
            return parseInt(-1);
    }
}