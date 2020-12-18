let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let tableauTrois = [tableauUn.map(item =>{
    return item ** item;
})];
console.log(tableauTrois);

let tableauQuatre = [tableauUn.map(item =>{
    return item * 10;
})];
console.log(tableauQuatre);

let tableauCinq = [tableauUn.map(item =>{
    return (item + 2) / 18;
})];
console.log(tableauCinq);

