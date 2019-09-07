var readlineSync = require('readline-sync');
var fs = require('fs');
function clinique() {
    nameRestriction = /[a-z]/ig;
    contactRestriction = /[0-9]/g;
    fs.readFile('./jsonFiles/cliniqManagement.json', function (err, data) {
        if (err) throw err
        var clinique = JSON.parse(data);
        do {
            console.log("1.ADD Appointment\n2.PRINTLIST\n3.SEARCH\n4.EXIT");
            var option = readlineSync.question('Enter the option:');
            switch (parseInt(option)) {
                case 1:
                    console.log("*Doctors Available*");
                    console.log(clinique.Doctors);
                    var Name = readlineSync.question('Patient Name: ');
                    if (nameRestriction.test(Name) == false) {
                        console.log("Invalid name!");
                        return false;
                    }
                    var ID = parseInt(Math.random() * 1000);
                    var mobNo = readlineSync.question('Mobile Number: ');
                    if (contactRestriction.test(mobNo) == false || mobNo.length != 10) {
                        console.log("Invalid mobile number!");
                        return false;
                    }
                    var Age = readlineSync.question('Age: ');
                    if (contactRestriction.test(Age) == false) {
                        console.log("Inappropriate age!");
                        return false;
                    }
                    var Appointed_To = readlineSync.question('whose appointment u want: ');
                    if (nameRestriction.test(Appointed_To) == false) {
                        console.log("Invalid name!");
                        return false;
                    }
                    clinique.Patients.push(
                        {
                            "Name": Name,
                            "ID": ID,
                            "mobNo": mobNo,
                            "Age": Age,
                            "Appointed_To": Appointed_To
                        })
                    console.log("Appointment Added Successfully...");
                    fs.writeFile('clinique1.json', JSON.stringify(clinique), function (err) {
                        if (err) throw err
                    })
                    break;
                case 2:
                    console.log(clinique);
                    break;
                case 3:
                    console.log("****SEARCH LIST******");
                    console.log("1.Doctor\n2.Patient");
                    var option2 = readlineSync.question('Enter Option: ');
                    if (option2 == 1) {
                        console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability");
                        var option3 = readlineSync.question('Enter option: ');
                        if (option3 == 1) {
                            var i = readlineSync.question('Name: ');
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].Name == i) {
                                    console.log("****Doctor Info****");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        else if (option3 == 2) {
                            var i = readlineSync.question('ID: ');
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].ID == i) {
                                    console.log("****Doctor's Info****");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        else if (option3 == 3) {
                            var i = readlineSync.question('Specialization: ');
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].Specialization == i) {
                                    console.log("****Doctor's Info****");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        else if (option3 == 4) {
                            var i = readlineSync.question('Availability: ');
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
                            var i = readlineSync.question('Name: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].Name == i) {
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 2) {
                            var i = readlineSync.question('ID: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].ID == i) {
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 3) {
                            var i = readlineSync.question('mobNo: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].mobNo == i) {
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 4) {
                            var i = readlineSync.question('Age: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].Age == i) {
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                    }
                    break;
                case 4:
                    console.log("ThankYou!");
                    break;
                default:
                    console.log("Plz enter valid option!!");
            }
        } while (option != 4);
    })
} clinique();