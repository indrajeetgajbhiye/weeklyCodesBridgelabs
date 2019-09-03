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
/**
 * @const {*} read
 * @description to get the functions from the readline-sync
 */
const read = require('readline-sync');
/**
 * @const {*} cashUtil
 * @description get all th epxports from the cashCountUtility
 */
const cashUtil = require('../utility/cashCountUtility');
/**
 * @var {number} amount 
 * @description is the initial amount the bank is having
 */
var amount = parseInt(50000);
/**
 * @var {number} min
 * @description minimum amount the bank should have
 */
var min = 10000;
while(amount>min)
{   
/**
 * @var {number} n 
 * @description number of people in the queue
 */
    var n = cashUtil.numInput();       
/**
 * @var {*} arr
 * @description array
 */
    var arr = [];
    
    for(var i=0; i<n; i++)
    {
        arr[i] = parseInt(read.question("Enter the Amount: "));
/**
 * @var {*} head 
 * @description creating a new queue node in the head
 */
        var head = new cashUtil.queueNode(null);
        var temp = head;
/**
 * @description pushing the content in node
 */
        temp = cashUtil.push(temp, head, arr, i);
        var current = head;
        console.log("Queue : ");
        cashUtil.print(current);
        var temp = head;
        console.log("person ", (i+1) , "'s amount : " , temp.data);
        var num = parseInt(read.question("Press 1 for deposit and 2 for withdrawl: "));
        inputCash();
        function inputCash(){
            if(num === 1){
/**
 * @description to deposite the amount in bank
 */
            amount = amount+temp.data;
            }
            else if(num === 2){
                if(temp.data < amount){
/**
 * @description tp withdraw the amount from the bank
 */
                    amount = amount-temp.data;
                }
/**
 * @description for insufficient funds in bank i.e balance less than 10000
 */
                else if(amount-temp.data < min){
                    console.log("Insufficient funds in bank");
                    console.log("Amount in bank : ",amount);
                    var current = head;
                    console.log("Queue : ");
                    cashUtil.print(current);
                    temp = temp.next;
                    head = head.next;
                    break;
                }
                else{
                    console.log("Insufficient funds in bank");
                    console.log("Amount in bank : ",amount);
                    var current = head;
                    temp = temp.next;
                    head = head.next;
                    break;
                }
            }
/**
 * @description in case of wrong input
 */
            else {
                console.log('ENTER A VALID INPUT')
                inputCash();
            }
        }
        temp = temp.next;
        head = head.next;
        console.log("Available amount in bank : " + amount);
        var current = head;
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