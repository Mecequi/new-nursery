let animaux = [
  {
    nom: "chat",
    longévité: " de 12 à 18 ans",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Chat_mi-long.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Chat ",
    description: " Le petit chat est appelé chaton ",
    aliments: ["Croquettes", " Paté", " Poulet"],
  },

  {
    nom: "cheval",
    longévité: " de 25 à 30 ans",
    image:
      "https://images.toucharger.com/img/graphiques/fonds-d-ecran/animaux/chevaux/cheval.74564.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Cheval ",
    description: " Le cheval a été dressé par l'homme ",
    aliments: ["Foin", " Herbe", " céréales"],
  },

  {
    nom: "Porc",
    longévité: " de 18 à 20 ans",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Pigs_in_the_Altai_Mountains._Village_Ortolyk.jpg/1280px-Pigs_in_the_Altai_Mountains._Village_Ortolyk.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Porc ",
    description: " Le porc ou cochon est un animal d'élevage ",
    aliments: ["Soja", " Maïs", " Pelures de légume"],
  },

  {
    nom: "chien",
    longévité: " de 15 à 20 ans",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Labradoodle.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Chien ",
    description: " Le chien est le meilleur ami de l'homme ",
    aliments: ["Croquettes", " Paté", " Riz soufflé"],
  },

  {
    nom: "poule",
    longévité: " de 20 à 25 ans",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Chicken_-_melbourne_show_2005.jpg/1280px-Chicken_-_melbourne_show_2005.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Poule ",
    description:
      " La poule est la femelle du cocq, le petit est appelé poussin ",
    aliments: ["Maïs", "Blé", "Epluchures de légume"],
  },
];

// animaux.forEach(function (element) {
//   document.write(element.nom + " ");
//   document.write(element.longévité + " ");
//   document.write(`
//   <a href="${element.wiki}">
//   <img src="${element.image}" height ="50px" width ="50px">
//   </a>
//   `);
// });
// pour rechercher l'image et l'afficher en image cliquable pour ouvrir le lien wiki,
// la balise <a et la balise <img doivent etre dans le meme document.write

document.write("<table border='1'>");
document.write(`
<tr>
<th> Nom </th>
<th> Longévité </th>
<th> Description </th>
<th> Image </th>
<th> WIKI </th>
<th> Alimentation </th>
</tr>
`);

animaux.forEach(function (element) {
  document.write("<tr>");

  document.write(`
    <td> ${element.nom} </td>
    <td> ${element.longévité}</td>
    <td> ${element.description}</td>
    `);
  document.write(
    `<td> <img src="${element.image}" + height="40px" width="40px"> </td> `
  );
  document.write(
    `<td> <a href=${element.wiki} target="_blank" >lien wiki</a> </td>`
  );
  // target="blank"permet d'ouvrir le lien wikipedia


  document.write('<td> <ul>');
  // // ouvrir le tableau sous forme de liste unordoned //  indiquer les li des elementaliment
  
  element.alimentation.forEach(function (elementaliment){
    document.write (`<li> ${elementation} </li>`)

})

  document.write('</td> </ul>');
  
  document.write("</tr>")
})

document.write("</table>");
