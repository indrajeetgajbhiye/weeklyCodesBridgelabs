class Linkedlist{   
    constructor(){
        let head=null;
    }
    Node(element){   
        
        this.element=element;
        this.next=null;
    };
    add(element){
        let node=new this.Node(element)
        if(this.head==null)
        this.head=node;
        else{
            let currentnode=this.head;
            while(currentnode.next!=null){
                currentnode=currentnode.next;
            }
            currentnode.next=node;
        }
    } 
    print(){
        var str="";
        let currentnode=this.head;
        while(currentnode!=null){
            str=str+currentnode.element+" ";
            currentnode=currentnode.next;
        }
        return str;
    }
    search(x){
        let currentnode=this.head;
        while(currentnode!=null){
            if(x==currentnode.element){
                this.remove(x)
                return "";
            } 
            currentnode=currentnode.next;       
        }
        this.add(x);
    }
    remove(x){
        let currentnode=this.head;
        let previous=currentnode;
        while(currentnode!=null){
            if(x==currentnode.element){   
                if(head.element==x) 
                    head=currentnode.next;
                else
                    previous.next=currentnode.next;
                    return "";
            }
            previous=currentnode;
            currentnode=currentnode.next;
        }
    }
}
module.exports={
    Linkedlist
}