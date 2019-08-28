var readlineSync = require("readline-sync");

module.exports= class vendingMachine{
    constructor(){
        console.log("******* Counting Currency ********  ");
    }
    countCurrency(amount) 
    { 
        this.amount=amount;
        var notes = [ 2000, 500, 200, 100, 50, 20, 10, 5, 2, 1 ]; 
        var noteCounter = [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]; 

        // Greedy approach 
        for (var i = 0; i < notes.length; i++) { 
            if (amount >= notes[i]) { 
                noteCounter[i] = Math.floor(amount / notes[i]); 
                amount = amount - noteCounter[i] * notes[i]; 
            } 
        } 
        
        var totalCount=0;
        console.log("currency count*************") 
        for ( i = 0; i < noteCounter.length; i++) { 
            if (noteCounter[i] != 0) { 
                console.log(notes[i]," ",noteCounter[i]); 
                totalCount=totalCount+noteCounter[i];
            } 
        } 
        console.log("Total notes Needed : ",totalCount);
        return totalCount;
    }
    takeInputs(){
        var inputAmount = readlineSync.question("Enter the amount: ");  
        return parseInt(inputAmount);
    }

    
    
}
