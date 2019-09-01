var deQue = require('../utility/deque')
function palChecker(str) {
    var charDeque = new deQue.Deque();
    for (var i = 0; i < str.length; i++) {
        charDeque.addRear(str[i]);
    }
    var stillEqual = true;
    while (charDeque.size() > 1 && stillEqual) {
        var first = charDeque.removeFront();
        var last = charDeque.removeRear();
        if (first !== last) {
            stillEqual = false;
        }
    }
    return stillEqual;
}
module.exports = {
    palChecker,
}