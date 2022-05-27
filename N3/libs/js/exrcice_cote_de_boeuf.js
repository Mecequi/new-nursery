let monTexte = "Toto souhaite manger une cote de boeuf";

const stringChangeImpair = (chaine) => {
  chaine = chaine.toLowerCase();

  let stringArray = chaine.split("");

  stringArray.forEach((element, i) => {
    if (i % 2 !== 0) {
      stringArray[i] = element.toUpperCase();
    }
  });

  document.write(`<br/>${stringArray.join(``)}<br/>`);
};

const stringChangePair = (chaine) => {
  chaine = chaine.toLowerCase();

  let stringArray = chaine.split("");

  stringArray.forEach((element, i) => {
    if (i % 2 === 0) {
      stringArray[i] = element.toUpperCase();
    }
  });

  document.write(`<br/>${stringArray.join(``)}<br/>`);
};
/*
stringChangeImpair(monTexte);
stringChangeImpair(prompt(`Votre Texte`));

stringChangePair(monTexte);
stringChangePair(prompt(`Votre Texte paire`));
*/
for(i=0;i<5;i++){
    stringChangePair(prompt("votre texte N°"+(i+1)));
}