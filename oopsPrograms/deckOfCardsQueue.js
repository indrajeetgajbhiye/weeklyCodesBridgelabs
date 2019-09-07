var sort = require('./utility/deckOfCardsUtils');
var arr1 = ["♣️", "♦️", "♥️", "♠️"];
var arr2 = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var finalCards = sort.deckOfCards(arr1, arr2);
for(var i = 0; i<4; i++){
    console.log("Player "+(i+1)+" Cards are : ")
    console.log( finalCards[i]);
}
console.log('********',finalCards[0]);
console.log("*********End")
function sortArray(playerCards, arr2){
    var newArray = new Array(9);
    
    for(var i=0 ;i<9; i++){
        var mastr =  JSON.stringify(playerCards[i]);
        var element = mastr.split(" ");
        newArray[i] = element;
    }
    // console.log(newArray);
    newArray.sort( function (a, b) {
        var A = a[key], B = b[key];
        
        if (arr2.indexOf(A) > arr2.indexOf(B)) {
          return 1;
        } else {
          return -1;
        }
        
      });
      
      console.log(newArray);
}
sortArray(finalCards[0], arr2);