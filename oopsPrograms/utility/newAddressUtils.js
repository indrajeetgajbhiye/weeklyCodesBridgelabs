let readlineSync = require('readline-sync');
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;
class Person{
    constructor(){
        this.name;
        this.street;
        this.area;
        this.city;
        this.state;
    }
    get Name(){
        return `${this.name}`;
    }
    set Name(value){
        try{
            if(nameRestriction.test(value) == false ) throw 'Invalid Name';
            else this.name = value;
        }
        catch(err){
            console.log(err);
        }
    }
    get Street(){

    }
    set Street(){

    }
    get Area(){

    }
    set Area(){

    }
    set City(){

    }
    get City(){

    }
    get State(){

    }
    set State(){

    }
}
class AddressBook{
    constructor(){
        this.addressObj = new Array();
    }
    
    createAddress(){
        console.log("createAddress");
    }
    deleteAddress(){
        console.log("deleteAddress");
    }
    openProfile(){
        console.log("openProfile");
    }
    inputAddress(){
        var addInput = new Person();
        var name = readlineSync.question("Enter the name : ");
        addInput.Name = name;

        
    }
}
module.exports = {
    AddressBook,
}