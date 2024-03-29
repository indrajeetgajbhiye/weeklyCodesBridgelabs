var fs = require('fs');
let readlineSync = require('readline-sync');
var upcomingAppoints = '../jsonFiles/upcomingAppointments.json';
var filepath = '../jsonFiles/cliniqManagement.json';
var data = fs.readFileSync(filepath, 'utf-8')
var clinique = JSON.parse(data);
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;
function addAppointment(){
    console.log("*Doctors Available*");
    console.log(clinique.Doctors);
    var Name = readlineSync.question('Patient Name : ');
    if (nameRestriction.test(Name) == false) {
        console.log("Invalid name!");
        this.addAppointment();
    }
    var ID = parseInt(Math.random() * 1000);
    var mobNo = readlineSync.question('Mobile Number : ');
    if (contactRestriction.test(mobNo) == false || mobNo.length != 10) {
        console.log("Invalid mobile number!");
        this.addAppointment();
    }
    var Age = readlineSync.question('Age : ');
    if (contactRestriction.test(Age) == false) {
        console.log("Inappropriate age!");
        this.addAppointment();
    }
    var Appointed_To = readlineSync.question('Whose Appointment you want : ');
    if (nameRestriction.test(Appointed_To) == false) {
        console.log("Invalid name!");
        this.addAppointment();
    }
    var n = checkAndShift(Name, ID, mobNo, Age, Appointed_To);
    if(n != 1){
        clinique.Patients.push({
            "Name": Name,
            "ID": ID,
            "mobNo": mobNo,
            "Age": Age,
            "Appointed_To": Appointed_To
        })
        fs.writeFileSync(filepath, JSON.stringify(clinique, null, 2));
        console.log("Appointment Added Successfully...");
        return true;
    }
}
function printList(){
    console.log(clinique);
    return true;
}
function searchList(){
    console.log("****SEARCH LIST******");
    console.log("1.Doctor\n2.Patient");
    var option2 = readlineSync.question('Enter Option: ');
    if (option2 == 1) {
        console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability");
        var option3 = readlineSync.question('Enter option: ');
        if (option3 == 1) {
            var i = readlineSync.question('Name : ');
            for (var key in clinique.Doctors) {
                if (clinique.Doctors[key].Name == i) {
                    console.log("****Doctor Info****");
                    console.log(clinique.Doctors[key]);
                }
            }
        }
        else if (option3 == 2) {
            var i = readlineSync.question('ID : ');
            for (var key in clinique.Doctors) {
                if (clinique.Doctors[key].ID == i) {
                    console.log("****Doctor's Info****");
                    console.log(clinique.Doctors[key]);
                }
            }
        }
        else if (option3 == 3) {
            var i = readlineSync.question('Specialization : ');
            for (var key in clinique.Doctors) {
                if (clinique.Doctors[key].Specialization == i) {
                    console.log("****Doctor's Info****");
                    console.log(clinique.Doctors[key]);
                }
            }
        }
        else if (option3 == 4) {
            var i = readlineSync.question('Availability : ');
            for (var key in clinique.Doctors) {
                if (clinique.Doctors[key].Availability == i || clinique.Doctors[key].Availability == "Both" ) {
                    console.log("****Doctor's Info****");
                    console.log(clinique.Doctors[key]);
                }
            }
        }
    }
    if (option2 == 2) {
        console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age");
        var option4 = readlineSync.question('Enter option: ');
        if (option4 == 1) {
            var i = readlineSync.question('Name : ');
            for (var key in clinique.Patients) {
                if (clinique.Patients[key].Name == i) {
                    console.log("****Patients Info****");
                    console.log(clinique.Patients[key]);
                }
            }
        }
        else if (option4 == 2) {
            var i = readlineSync.question('ID : ');
            for (var key in clinique.Patients) {
                if (clinique.Patients[key].ID == i) {
                    console.log("****Patients Info****");
                    console.log(clinique.Patients[key]);
                }
            }
        }
        else if (option4 == 3) {
            var i = readlineSync.question('contact No : ');
            for (var key in clinique.Patients) {
                if (clinique.Patients[key].mobNo == i) {
                    console.log("****Patients Info****");
                    console.log(clinique.Patients[key]);
                }
            }
        }
        else if (option4 == 4) {
            var i = readlineSync.question('Age : ');
            for (var key in clinique.Patients) {
                if (clinique.Patients[key].Age == i) {
                    console.log("****Patients Info****");
                    console.log(clinique.Patients[key]);
                }
            }
        }
    }
    return true;
}
function checkAndShift(Name, ID, mobNo, Age, Appointed_To){
    var newData = fs.readFileSync(upcomingAppoints, 'utf-8');
    var cliniqueStacked = JSON.parse(newData);
    var count = 0;
    for(var i =0; i<clinique.Patients.length; i++){
        if(Appointed_To == clinique.Patients[i].Appointed_To){
            count++;
        }
    }
    date_ob =new Date();
    if(count>=5){
        cliniqueStacked.push({
            "Name": Name,
            "ID": ID,
            "mobNo": mobNo,
            "Age": Age,
            "Appointed_To": Appointed_To,
            "Date" : (date_ob.getDate()+2)+'/'+date_ob.getMonth()+'/'+date_ob.getFullYear()
        });
    console.log("Sorry! Doctor is busy your appointment is on", (date_ob.getDate()+2)+'/'+date_ob.getMonth()+'/'+date_ob.getFullYear());
    fs.writeFile(upcomingAppoints, JSON.stringify(cliniqueStacked, null, 2), function (err) {
        if (err) throw err
    })
    return 1;
    }
}
module.exports = {
    addAppointment,
    printList,
    searchList
}