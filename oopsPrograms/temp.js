let readlineSync = require('readline-sync');
class Person{

}
class AddressBook{
    constructor(){
    }
    get Name(){
        console.log("get function")
        return `${this.name}`; 
    }
    set Name(value){
        console.log("set function")
        try{

        }
        catch(err){

        }
        this.name = value;
    }
    createAddress(){
        
    }
}
var address = new AddressBook();
address.Name = "Ishika";
console.log(address);
address.Name;
console.log(address);
address.createAddress()