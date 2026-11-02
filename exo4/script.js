// Qst 1
// objects slide 40
let produit = {
    nom: "Laptop",
    prix: 120000,
    quantite: 5
};

let valeurStock = produit.prix * produit.quantite;

console.log("Nom du produit :", produit.nom);
console.log("Prix unitaire :", produit.prix, "DA");
console.log("Quantite disponible :", produit.quantite);
console.log("Valeur totale du stock :", valeurStock, "DA");

// Qst 2
// array of objects slide 41
let catalogue = [
    { nom: "Laptop", prix: 120000, quantite: 5 },
    { nom: "Mouse", prix: 2000, quantite: 20 },
    { nom: "Keyboard", prix: 5000, quantite: 10 },
    { nom: "Screen", prix: 30000, quantite: 8 },
    { nom: "Headphones", prix: 8000, quantite: 15 }
];

// Calculate average price
// arrow function mentioned in slide 47
let moyenne = catalogue.reduce((somme, p) => somme + p.prix, 0) / catalogue.length;

console.log("Prix moyen :", moyenne);

// Display products above average
// forEach() loop slide 45
//if condition slide 43
console.log("Produits dont le prix depasse la moyenne :");
catalogue.forEach(p => {
    if (p.prix > moyenne) {
        console.log(p.nom, p.prix);
    }
});

//Qst 3
// arrow function mentioned in slide 47
let totalArticles = catalogue.reduce(
    (total, p) => total + p.quantite, 0
);
// arrow function mentioned in slide 47
let valeurGlobale = catalogue.reduce(
    (total, p) => total + (p.prix * p.quantite), 0
);

console.log("Total articles :", totalArticles);
console.log("Valeur globale du stock :", valeurGlobale);

//Qst 4

function calculerStock(produit) {
    return produit.prix * produit.quantite;
}


// forEach() loop slide
console.log("Valeur du stock de chaque produit :");
catalogue.forEach(p => {
    console.log(p.nom, calculerStock(p));
});

// Qst5
// forEach() loop slide 45
//callback mentioned in slide 48

function appliquerTraitement(catalogue, callback) {
    catalogue.forEach(callback);
}

// Display product names
console.log("Liste des noms :");
appliquerTraitement(catalogue, function(p) {
    console.log(p.nom);
});

// Display product prices
console.log("Liste des prix :");
appliquerTraitement(catalogue, function(p) {
    console.log(p.prix);
});