// alert("Hello word !");

// let nom = "Desrousseaux";
// let prenom = "Audrey";
// let age = 50;

// // bonjour ! je suis nom prenom, j'ai age ans !

// console.log(
//   "bonjour ! je suis " + nom + " " + prenom + ", j'ai " + age + " ans ! "
// );
// console.log(` ! Je suis ${nom} ${prenom}, j'ai ${age} ans !`);
// console.log("Bonjour ! Je suis", nom, " ", prenom, ", j'ai ", age, "ans !");

// const nomComplet = "Julien La Garde";

// console.log(prenom.substring(1, 2));

// console.log(nomComplet.split("a"));

// const csv1 = "Joh;,Doe;120 jefferson st.;Riverside; NJ; 08075";

// console.log(csv1.split(";"));

// // format csv
// //Joh;,Doe;120 jefferson st.;Riverside; NJ; 08075
// //Jack;McGinnis;220 hobo Av.;Phila;PA;09119
// //Bonjour !  Je suis Dupond Toto, j'ai  99 ans !

// const csv2 = "Jack;McGinnis;220 hobo Av.;Phila;PA;09119 ";
// console.log(csv2.split(";"));

// const csv3 = "Bonjour !  Je suis Dupond Toto, j'ai  99 ans !";
// console.log(csv3.split(" "));

// let monTableau = [11, 22, 44, 88, 99, 124, 188, 258, 299, 300];
// console.log(monTableau[0]);
// console.log(monTableau[1]);
// console.log(monTableau[2]);
// console.log(monTableau[3]);
// console.log(monTableau[4]);
// console.log(monTableau[5]);
// console.log(monTableau[6]);
// console.log(monTableau[7]);
// console.log(monTableau[8]);
// console.log(monTableau[9]);

// const personne = {
//   nom: "desr",
//   prenom: "Audrey",
//   age: 50,
//   mail: "monemail@gmail.com",
//   adresse: {
//     num: 40,
//     rue: "général Leclerc",
//     ville: "Wasquehal",
//     pays: "France",
//   },
// };
// console.log(`Bonjour, je suis ${personne.nom} ${prenom}`);
// console.log(`J'habite à ${personne.adresse.ville}`);
// console.log(`mon mail ${personne.mail}`);

// personne.email = "monemail@gmail.com";

// console.log(personne.email);

// let per = [
//   {
//     nom: "Desr",
//     prenom: "Audrey",
//     age: 50,
//     passions: ["Natation", "céramique", "Culture"],
//     adresse: {
//       rue: "Leclerc",
//       ville: "Lille",
//       pays: "Franced",
//     },
//   },
//   {
//     nom: "Johns",
//     prenom: "Indiana",
//     age: 38,
//     passions: ["Aventure", "course", "escalade", "survie"],
//     adresse: {
//       rue: "Sauvage",
//       ville: "Junggle",
//       pays: "Adventure Land",
//     },
//   },
// ];

// console.log(per);
// console.log(per[1].age);

// // console log affiche
// console.log(per[1].passions[2]);

// // modifier la valeur d'une clé
// per[1].passions[2] = "equitation";
// console.log(per[1].passions[2]);

// // ici forEach avec une function anonyme
// let nombres = [1, 2, 35, 99, 105];
// nombres.forEach(function (element) {
//   document.write(element + "<br>");
// });

// //  ici forEach avec function idem, ecrite par =>
// nombres.forEach((element) => {
//   document.write(element + " ");
// });
// // on parcours le tableau de la fin jusqu'au début
// for (let i = nombres.length - 1; i >= 0; i--) {
//   document.write(nombres[i] + " ");
// }
// document.write("<br>");
// //  on parcours le tableau du début à la fin avec une boucle for
// for (let i = 0; i < nombres.length; i++) {
//   document.write(nombres[i] + " ");
// }

// // on parcours le taleau tant que 99 s'affiche
// // let i = 0;
// // while ( if(i=nombres.length-2){
// // document.write(nombres[i])} );

// let nombreRechercher = 0;
// let indice = 0;
// while (indice < nombres.length && nombreRechercher !== 99) {
//   nombreRechercher = nombres[indice];
//   document.write((nombreRechercher = "<br>"));
// }

// let age = 100;
// if (age == 12) {
//   console.log(" Près Ado ");
// } else if (age < 12) {
//   console.log(" enfant ");
// } else if (age > 13 && age < 18) {
//   console.log(" ado ");
// } else if (age >= 18 && age < 99) {
//   console.log(" Majeur ");
// } else if ( age > 99) {
//   console.log(" c'est bientôt la fin ");
// } else {console.log("Age invalide");
// }

// déclarer une variable AbstractRange, informer l'utilisateur de sa catégorie (document.write)
// "poussin" de 6 à 7 ans



// let age = 6;


// if (age >= 6 && age <= 7) {
//   document.write('<h1> poussin </h1> <img src = "https://gifimage.net/wp-content/uploads/2018/04/poussin-gif-4.gif" height ="70px" width ="50px" >');
// } else if (age >= 8 && age <= 9) {
//   document.write('<h1> pupille </h1>');
// } else if (age >= 10 && age <= 11) {
//   document.write('<h1> minime </h1>');
// } else if (age >= 13 && age <= 16) {
//   document.write('<h1> cadet </h1>');
// } else {
//   document.write("invalide");
// }


let age = 22
switch (true){
case age >= 6 && age <= 7:console.log ("poussin") ;
break;
case age >= 8 && age <= 9:console.log ("pupille") ;
break;
case age >= 10 && age <= 11:console.log ("minime") ;
break;
case age >= 12 && age <= 16:console.log ("cadet") ;
break;
default : console.log (" age non valide");

}