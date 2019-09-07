var fs = require('fs');
let readlineSync = require('readline-sync');
var data = fs.readFileSync('./jsonFiles/cliniqManagement.json', 'utf-8')
var clinique = JSON.parse(data);
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;
function addAppointment(){
    console.log("*Doctors Available*");
    console.log(clinique.Doctors);
    var Name = readlineSync.question('Patient Name : ');
    if (nameRestriction.test(Name) == false) {
        console.log("Invalid name!");
        return false;
    }
    var ID = parseInt(Math.random() * 1000);
    var mobNo = readlineSync.question('Mobile Number : ');
    if (contactRestriction.test(mobNo) == false || mobNo.length != 10) {
        console.log("Invalid mobile number!");
        return false;
    }
    var Age = readlineSync.question('Age : ');
    if (contactRestriction.test(Age) == false) {
        console.log("Inappropriate age!");
        return false;
    }
    var Appointed_To = readlineSync.question('Whose Appointment you want : ');
    if (nameRestriction.test(Appointed_To) == false) {
        console.log("Invalid name!");
        return false;
    }
    if(checkAndShift(Name, ID, mobNo, Age, Appointed_To) != 1){
        clinique.Patients.push({
            "Name": Name,
            "ID": ID,
            "mobNo": mobNo,
            "Age": Age,
            "Appointed_To": Appointed_To
        })
    }
    // console.log("Appointment Added Successfully...");
    fs.writeFileSync('./jsonFiles/cliniqManagement.json', JSON.stringify(clinique, null, 2));
    console.log("Appointment Added Successfully...");
}
function printList(){
    console.log(clinique);
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
                if (clinique.Doctors[key].Availability == i) {
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
}
function checkAndShift(Name, ID, mobNo, Age, Appointed_To){
    var newData = fs.readFileSync('./jsonFiles/cliniqManagement.json', 'utf-8')
    var cliniqueStacked = JSON.parse(newData);
    var count = 0;
    for(var i =0; i<clinique.Doctors.length; i++){
        if(Appointed_To == clinique.Doctors.name){
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
    }
    fs.writeFile('./jsonFiles/upcomingAppointments.json', JSON.stringify(cliniqueStacked), function (err) {
        if (err) throw err
    })
    return 1;
}
module.exports = {
    addAppointment,
    printList,
    searchList
}