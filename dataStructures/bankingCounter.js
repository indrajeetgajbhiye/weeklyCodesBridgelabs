/******************************************************************************
 * Execution    :   default node            terminal> node cashCounter.js
 * 
 * Purpose      :   To enter amounts of people in queue and deposit/withdraw amount from bank
 *                  and dequeue them after transaction.
 * 
 * @description
 * 
 * @file        :   bankingCounter.js
 * @overview    :   To enter amounts of people in queue and deposit/withdraw amount from bank
 *                  and dequeue them after transaction.
 * @author      :   Indrajeet Gajbhiye indrajeetgajbhiye@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/

const read = require('readline-sync');
const cashUtil = require('../utility/cashCountUtility');
var amount = parseInt(50000);
var min = 10000;
while(amount>min)
{
    var n = cashUtil.numInput();        //number of people entering the queue at a time
    var arr = [];
    console.log("Enter the amounts of people: ");
    for(var i=0; i<n; i++)
    {
        arr[i] = parseInt(read.question(""));
    }
    var head = new cashUtil.queueNode(null);
    var temp = head;
    for(var i=0; i<n; i++)
    {
        temp = cashUtil.push(temp, head, arr, i);
    }
    var current = head;
    console.log("Queue : ");
    cashUtil.print(current);
    var temp = head;
    for(var i=0; i<n; i++)
    {
        console.log("person ", (i+1) , "'s amount : " , temp.data);
        var num = parseInt(read.question("Press 1 for deposit and 2 for withdrawl: "));
        if(num === 1)
        {
            amount = amount+temp.data;
        }
        else if(num === 2)
        {
            if(temp.data < amount)
            {
                amount = amount-temp.data;
            }
            else if(amount-temp.data < min)
            {
                console.log("Insufficient funds in bank");
                console.log("Amount in bank : ",amount);
                var current = head;
                console.log("Queue : ");
                cashUtil.print(current);
                temp = temp.next;
                head = head.next;
                break;
            }
            else
            {
                console.log("Insufficient funds in bank");
                console.log("Amount in bank : ",amount);
                var current = head;
                console.log("Queue : ");
                cashUtil.print(current);
                temp = temp.next;
                head = head.next;
                break;
            }
        }
        temp = temp.next;
        head = head.next;
        console.log("Available amount in bank : " + amount);
        var current = head;
        console.log("Queue : ");
        cashUtil.print(current);
    }
    console.log("Type 'yes' if you want to quit the queue else any input to continue");
    var ans = read.question("");
    if(ans === 'yes')
    {
        console.log("Final amount is bank : ",amount);
        break;
    }
    else
    {
        continue;
    }
}