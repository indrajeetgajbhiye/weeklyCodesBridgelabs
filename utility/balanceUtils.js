var stack = require('../utility/stack');
var stackObj = new stack.Stack();
function main(expression){
    var leftCount = 0;
    var rightCount = 0;
    var err;
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
        err = 'Balanced paranthesis';
        console.log(err);
    }
    else {
        err = 'Not Balanced';
        console.log(err);
    }
    console.log(stackObj.peek());
    return err;
}
main();

module.exports ={
    main,
}