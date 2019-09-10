/*******************************************************************************************************
 * Execution    :   default node            terminal> node deckOfCardsQueue.js
 * 
 * Purpose      :   to learn read and write through json object
 * 
 * @description
 * 
 * @file        :   deckOfCardsUtils.js
 * @overview    :   to read the data from one json file write customised data in another json file
 *                  
 * @author      :   Indrajeet Gajbhiye indrajeetgajbhiye@gmail.com
 * @version     :   1.0
 * @since       :   10-08-2019
*******************************************************************************************************/
/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 * @param {array} arr3 
 * @description to shuffle the arr3 to generate the random array 
 */
function shuffle(arr1, arr2, arr3) {
    var n = arr1.length * arr2.length;
    for (var i = 0; i < n; i++) {
        var random = i + parseInt(Math.random() * (n - i));
        var temp = arr3[random];
        arr3[random] = arr3[i];
        arr3[i] = temp;
    }
    
    return arr3;
}
/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 */
function deckOfCards(arr1, arr2){
    var finalArray = new Array(4);
    for(var i =0; i < 4; i++){
        finalArray[i] = new Array(9);
    }
    var n = arr1.length * arr2.length;
    var arr3 = new Array(n);
/**
 * @description  generating the array of all the elements present in the arr1 and arr2
 */
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            arr3[arr1.length * i + j] =new Array(2);
            arr3[arr1.length * i + j][0] = arr2[i]
            arr3[arr1.length * i + j][1] = arr1[j];
        }
    }
/**
 * @description converting tha arr3 in two dimentional array
 */
    arr3 = shuffle(arr1, arr2, arr3);
    for(var i  = 0; i<4;i++){
        for(var j = 0; j<9; j++){
            finalArray[i][j]=arr3[arr1.length * i + j];
        }
    }
    return finalArray;
  }
/**
 * 
 * @param {array} array 
 * @param {array} order 
 */
function mapOrder(array, order) {
	array.sort(function (a, b) {
		var A = a[0], B = b[0];
		if (order.indexOf(A) > order.indexOf(B)) {
			return 1;
		} else {
			return -1;
		}
    });
	return array;
};
function mapOrder1(array, order) {
	array.sort(function (a, b) {
		var A = a[1], B = b[1];
		if (order.indexOf(A) > order.indexOf(B)) {
			return 1;
		} else {
			return -1;
		}
    });
	return array;
};

module.exports ={
    shuffle,            
    deckOfCards,
    mapOrder,
    mapOrder1
}

