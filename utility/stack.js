class Stack { 
    constructor() 
    { 
        this.items = []; 
    } 
    push(element) 
    {  
        this.items.push(element); 
    } 
    pop() 
    { 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    }
    peek() 
    { 
        return this.items[this.items.length - 1]; 
    } 
    isEmpty() 
    { 
        console.log(this.items.length == 0);
        return this.items.length == 0; 
    }
    printStack()
    { 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    }
} 
module.exports = {
    Stack,
}
