/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.

*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed

*/

/******************************************************************************************************************
 *  Execution       :   
 * 
 * 
 *  Purpose         :   the pusrpose of this program is to sort an array of numbers using the bubble sort
 *                      algorithm 
 *                      
 *                      
 * 
 * @description     
 *  
 * @file            :   bubbleSort.js
 * @overview        :   To sort the array of numbers in increasing order
 * @module          :
 * @author          :   Indrajeet Gajbhiye indrajetgajbhiye@gmail.com
 * @version         :   
 * @since           :   27-08-2019
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
/**
 * 
 * @param {number} arr 
 * @param {number} first_Index 
 * @param {num} second_Index 
 * @description it swaps the elements in the given indexes
 */
function swap(arr, first_Index, second_Index){
/**
 * @description swapping using a third varible
 */
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}
/**
 * 
 * @param {number} arr 
 * @description using the algorithm of bubble sort
 */
function bubbleSort(arr){
/**
 * @var {number} len gets the length of an array
 * @var {number} i to run the for loop
 * @var {number} j to run the for loop
 * @var {number} stop to implement stop condition
 */
    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
/**
 * @description calling swap function
 */
                swap(arr, j, j+1);
            }
        }
    }
/**
 * @return {number} arr
 */
    return arr;
}
/**
 * @exports bubbleSort
 * @exports swap
 */
module.exports = {
    bubbleSort,
    swap,
}