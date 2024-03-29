/*******************************************************************************************************
 * Execution    :   default node            terminal> node grocery.js
 * 
 * Purpose      :   to learn read and write through json object
 * 
 * @description
 * 
 * @file        :   deckOfCardsQueue.js
 * @overview    :   to read the data from one json file write customised data in another json file
 *                  
 * @author      :   Indrajeet Gajbhiye indrajeetgajbhiye@gmail.com
 * @version     :   1.0
 * @since       :   06-08-2019
*******************************************************************************************************/
function main(){
	var deck = require('./utility/deckOfCardsUtils');
	var arr1 = ["♣️", "♦️", "♥️", "♠️"];
	var arr2 = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
	var finalCards = deck.deckOfCards(arr1, arr2);
	for (var i = 0; i < 4; i++) {
		console.log("Player " + (i + 1) + " Cards are : ")
		console.log(finalCards[i]);
	}
	for(var i =0; i<4; i++){
		finalCards[i]= deck.mapOrder1(finalCards[i], arr1)
	}
	console.log(finalCards);
	for(var i =0; i<4; i++){
		finalCards[i]= deck.mapOrder(finalCards[i], arr2)
	}
	for(var i =0 ; i<4; i++){
		console.log("Cards decked by player",i+1);
		console.log(finalCards[i]);
	}
	return true;
}
main();
module.exports = {
	main
}