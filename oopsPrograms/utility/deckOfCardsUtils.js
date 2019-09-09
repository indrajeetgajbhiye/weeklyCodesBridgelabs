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
function deckOfCards(arr1, arr2){
    var finalArray = new Array(4);
    for(var i =0; i < 4; i++){
        finalArray[i] = new Array(9);
    }
    var n = arr1.length * arr2.length;
    var arr3 = new Array(n);
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            arr3[arr1.length * i + j] =new Array(2);
            arr3[arr1.length * i + j][0] = arr2[i]
            arr3[arr1.length * i + j][1] = arr1[j];
        }
    }
    arr3 = shuffle(arr1, arr2, arr3);
    for(var i  = 0; i<4;i++){
        for(var j = 0; j<9; j++){
            finalArray[i][j]=arr3[arr1.length * i + j];
        }
    }
    return finalArray;
  }
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

module.exports ={
    shuffle,            
    deckOfCards,
    mapOrder
}

