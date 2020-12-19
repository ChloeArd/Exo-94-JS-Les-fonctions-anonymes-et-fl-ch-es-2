let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
//TableauUn
let tableauTrois = [tableauUn.map(item =>{
    return item ** item;
})];
console.log("item ** item => " + tableauTrois);

let tableauQuatre = [tableauUn.map(item =>{
    return item * 10;
})];
console.log("item * 100 => " + tableauQuatre);

let tableauCinq = [tableauUn.map(item =>{
    return (item + 2) / 18;
})];
console.log("item + 2 / 18 => " + tableauCinq);

let tableauSix = tableauUn.filter(item => item > 2);
console.log("item > 2 => " + tableauSix);

let tableauSept = tableauUn.filter(item => item % 2);
console.log("item % 2 => " + tableauSept);

let tableauHuit = tableauUn.filter(item => (item * 3) > 10);
console.log("(item * 3) > 10 => " + tableauHuit);

//TableauDeux
let tableauNeuf = [tableauDeux.map(item =>{
    return item.length;
})];
console.log("item.length => " + tableauNeuf);

let tableauDix = [tableauDeux.map(item =>{
    return "L'élément " + item + " à une longeur de " + item.length;
})];
console.log("item + item.length => " + tableauDix);

let tableauOnze = [tableauDeux.map(item =>{
    return item + item;
})];
console.log("item + item => " + tableauOnze);