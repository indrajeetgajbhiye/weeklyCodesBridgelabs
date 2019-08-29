let stack = require('../utility/stack'); 
let stackOps;
let stackNum;
class Arithmatic{
    constructor(){
        stackOps = new stack.Stack();
        stackNum = new stack.Stack();
    }
    isdigit(tokens, i){
        if(tokens[i]=='1'||tokens[i]=='2'||tokens[i]=='2'||tokens[i]=='3'||tokens[i]=='4'||tokens[i]=='5'||tokens[i]=='6'||tokens[i]=='7'||tokens[i]=='8'||tokens[i]=='9'||tokens[i]=='0'){
            return true;
        }
        else 
            return false
    }
    precedence(operator){ 
        if(operator == '+'||operator == '-') 
            return 1; 
        if(operator == '*'||operator == '/') 
            return 2; 
        return 0; 
    } 
    applyOperator(operand1, operand2, operator){ 
        if(operator == '+')
            return operand1 + operand2;
        if(operator == '-')
            return operand1 - operand2;
        if(operator == '/')
            return operand1 / operand2;
        if(operator == '*')
            return operand1 * operand2;
    }  
    evaluateExpression(tokens){  
        for( var i = 0; i < tokens.length; i++){  
            console.log("indldl")
            if(tokens[i] == ' '){
                continue; 
            }
            if(tokens[i] == '('){
                console.log("("); 
                stackOps.push(tokens[i]); 
                continue;
            }  
            if(this.isdigit(tokens,i) == true){ 
                console.log("is digit")
                var val = 0;  
                while(i < tokens.length && this.isdigit(tokens, i)== true){ 
                    val = (val*10) + Number(tokens[i]); 
                    i++; 
                } 
                stackNum.push(val);
                continue;
            }  
            if(tokens[i] == ')') { 
                while(stackOps.isEmpty()!=true && stackOps.peek() != '(') 
                { 
                    var operand2 = stackNum.peek(); 
                    stackNum.pop(); 
                    var operand1 = stackNum.peek(); 
                    stackNum.pop(); 
                    var operator = stackOps.peek(); 
                    stackOps.pop(); 
                    console.log(stackNum.push(this.applyOperator(operand1, operand2, operator))); 
                    
                }  
                if(stackOps.isEmpty()) 
                    stackOps.pop(); 
            }  
            else
            { 
                while(stackOps.isEmpty()!= true && this.precedence(stackOps.peek())>= this.precedence(tokens[i])){ 
                    var operand2 = stackNum.peek(); 
                    stackNum.pop(); 
                    var operand1 = stackNum.peek(); 
                    stackNum.pop(); 
                    var operator = stackOps.peek(); 
                    stackOps.pop(); 
                    stackOps.push(this.applyOperator(operand1, operand2, operator)); 
                } 
                stackOps.push(tokens[i]); 
            } 
        }
        while(stackOps.isEmpty()!= true){ 
            var operand2 = stackNum.peek(); 
            stackNum.pop();     
            var operand1= stackNum.peek(); 
            stackNum.pop(); 
            var operator = stackOps.peek(); 
            stackOps.pop(); 
            stackNum.push(this.applyOperator(operand1, operand2, operator)); 
        }
        return stackNum.peek(); 
    }
}

module.exports = {
    Arithmatic,
}