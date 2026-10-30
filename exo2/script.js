// use strict is mentioned in slide 52
"use strict";

// arrays slide 39
let list_etudiant = ["etudiant1", "etudiant2", "etudiant3"];
// objects slide 40
let student ={
    Nom: "John",
    Prenom : "Doe",
    age : 30,
}
// arrray of objects slide 41
const table_objet_etudiant = [
    {
        Nom: "nom1",
        Prenom: "prenom1",
        Age: 21

    },
    {
        Nom: "nom2",
        Prenom: "prenom2",
        Age: 22

    },
    {
        Nom: "nom3",
        Prenom: "prenom3",
        Age: 23

    }
]
// Function f1 prints the list list_etudiant
// forEach() loop slide 45
function f1() {
    list_etudiant.forEach(etudiant => console.log(etudiant));
}
// Function f2 prints the object student
function f2() {
    console.log(student);
}
// Function f3 prints a table of objects table_objet_etudiant
// for loop mentioned in slide 45
// string concatination mention in slide 38
function f3() {
    for (let i = 0; i < table_objet_etudiant.length; i++) {
        console.log(table_objet_etudiant[i].Nom + "-" + table_objet_etudiant[i].Prenom + "-" + table_objet_etudiant[i].Age);
    }
}