var stack = require('../utility/stack');
var stackObj = new stack.Stack();
var expression = '(9+2)*(6-2)';
for(i in expression){
    if(expression[i]=='('){
        stackObj.push(expression[i]);
    }
    if(expression[i]==')'){
        stackObj.pop();
    }
    else 
        continue;
}
if(stackObj.peek()!='(' && stackObj.peek()!= ')'){
    console.log('Balanced paranthesis')
}
else {
    console.log('not balanced ')
}
console.log(stackObj.peek());