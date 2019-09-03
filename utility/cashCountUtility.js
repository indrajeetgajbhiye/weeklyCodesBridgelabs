var read = require('readline-sync');
class queueNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function numInput()
{
    console.log("Number of people to enter in queue : ");
    var n = parseInt(read.question(""));
    return n;
}
function push(temp1, head, arr, i)
{
    if(head.data == null)
    {
        head.data = arr[i];
        return head;
    }
    else
    {
        var temp = new queueNode(arr[i]);
        temp1.next = temp;
        temp1 = temp;
        return temp1;
    }
    
}
function print(current)
{
    while(current!=null)
    {
        console.log(current.data);
        current = current.next;
    }
}
module.exports = {
    queueNode,
    numInput,
    push,
    print
}