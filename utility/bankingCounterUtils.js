var que = require('../utility/queueUsingLinkedList');
let readlineSync = require('readline-sync'); 
var queue = new que.Queue();
class Bank {
    constructor(totalAmount, size){
        this.totalAmount = totalAmount;
        this.size = size;
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
        var input = this.inputChoice();
        if(input == 1){
            this.deposit();
        }
        if(input == 2){
            this.withdraw();
        }
        else {
            input = this.processBanking();
        }
    }
    deposit(){
        var amount = readlineSync.question('Enter the amount you want to deposit');
        if(queue.size() < this.size && amount > 0){
            queue.enqueue(amount);
            this.totalAmount=this.totalAmount+amount;
            this.size--;
        }
        if(queue.size()<this.size && amount < 0){
            this.deposit();
        }
        else{
            console.log('Sorry limit reached');
        }
    }
    withdraw(){
        var amount = readlineSync.question('Enter the amount you want to withdraw');
        if(amount < this.totalAmount && amount > 0 && queue.size() > this.size){
            queue.dequeue();
        }
        if(amount < this.totalAmount && amount < 0 && queue.size() > this.size){
            
        }
        if(amount > this.totalAmount && amount > 0 && queue.size() > this.size){
            
        }
        else {
            console.log('Sorry limit reached');
        }
    }
}

module.exports = {
    Bank,
}