// use strict is mentioned in slide 52
"use strict";

// array of objects slide 41
const Students = [
    { id: 1000, prenom: "JOHN", nom: "DOE", note1: 14, note2: 5 },
    { id: 2000, prenom: "BOB", nom: "CARLTON", note1: 7, note2: 1 },
    { id: 3000, prenom: "RAYANE", nom: "SMITH", note1: 13, note2: 3 }
];

// Funtion B returns true or false based on the "moyenne"
//conditions in slide 43
function B(moyenne) {
    return moyenne >= 10;
}

// Funtion A claculates the "moyenne" and checks the status before printing it on the console alongside the student id
// for loop mentioned in slide 45
// string concatination mention in slide 38
function A() {
    for (let i = 0; i < Students.length; i++) {
        let moyenne = (Students[i].note1 + Students[i].note2) / 2;
        let estAdmis = B(moyenne);
        let statut = estAdmis ? "ADMIS" : "AJOURNÉ";

        console.log(Students[i].id + ": " + statut);
    }
}