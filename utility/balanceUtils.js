var stack = require('../utility/stack');
var stackObj = new stack.Stack();
function main(expression){
    var leftCount = 0;
    var rightCount = 0;
    for(i in expression){
        if(expression[i]=='('){
            stackObj.push(expression[i]);
            leftCount++;
        }
        if(expression[i]==')'){
            stackObj.pop();
            rightCount++;
        }
        else 
            continue;
    }
    if(stackObj.peek()!='(' && stackObj.peek()!= ')' && leftCount == rightCount){
        console.log('Balanced paranthesis')
    }
    else {
        console.log('not balanced ')
    }
    console.log(stackObj.peek());
}
main();

module.exports ={
    main,
}