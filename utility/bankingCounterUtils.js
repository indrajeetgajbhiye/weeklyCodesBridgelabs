var que = require('../utility/queueUsingLinkedList');
let readlineSync = require('readline-sync'); 
var queue = new que.Queue();
class Bank {
    constructor(totalAmount, size){
        totalAmount = this.totalAmount;
        size = this.size;
    }
    inputChoice(){
        var choice = readlineSync.question('press 1 to deposit ... 2 to withdraw');
        try{
            if(choice == 1) throw 1;
            if(choice == 2) throw 2;
            else throw console.log('Give valid choice');
        }
        catch(err){
            return err;
        }
    }
    processBanking(){
        var input = inputChoice();
        if(input == 1){
            deposit();
        }
        if(input == 2){
            withdraw();
        }
        else {
            input = this.processBanking();
        }
    }
    deposit(){
        var amount = readlineSync.question('Enter the amount you want to deposit');
        if(queue.size()<size && amount > 0){
            queue.enqueue(amount);
            totalAmount=totalAmount+amount;
            size--;
        }
        if(queue.size()<size && amount < 0){
            this.deposit();
        }
        else{
            console.log('Sorry limit reached');
        }
    }
    withdraw(){
        var amount = readlineSync.question('Enter the amount you want to withdraw');
        if(amount < totalAmount && amount > 0 && queue.size > size){
            queue.dequeue();
        }
        if(amount < totalAmount && amount < 0 && queue.size > size){
            
        }
        if(amount > totalAmount && amount > 0 && queue.size > size){
            
        }
        else {
            console.log('Sorry limit reached');
        }
    }
}