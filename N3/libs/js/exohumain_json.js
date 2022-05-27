const humain={
    couleur_cheveux: "Bleu",
    couleur_yeux: "noir",
    taille: 187,
    age: 34,
    sex: "M",
    hobbies:["pêche","JS","Boxe"],
    img: "https://c.tenor.com/ysUnD6xjPZQAAAAC/kamoulox.gif",
    nom: "Toto"
};

document.write(`<div>
<img src=${humain.img} />
<div>
<h1>${humain.nom}</h1>
<span>${humain.sex}</span><br/>
<span>${humain.age} ans</span><br/>
<span>${humain.hobbies.join(' - ')}</span><br/>
<span>${humain.taille} cm</span>
</div>
</div>`);

// ceci est un affichage rapide de html via un objet JSON en JS

const humain={
    couleur_cheveux: "Bleu",
    couleur_yeux: "noir",
    taille: 187,
    age: 34,
    sex: "M",
    hobbies:["pêche","JS","Boxe"],
    img: "https://c.tenor.com/ysUnD6xjPZQAAAAC/kamoulox.gif",
    nom: "Toto",
    adresse:{
        rue:"rue des Orties",
        num: 34,
        ville:{
            cp:59180,
            nom:"truc",
            region:{
                nomination:"machin",
                code:"#3340"
            }
        }
    }
};

document.write(`<div>
<img src=${humain.img} />
<div>
<h1>${humain.nom}</h1>
<span>${humain.sex}</span><br/>
<span>${humain.age} ans</span><br/>
<span>${humain.hobbies.join(' - ')}</span><br/>
<span>${humain.taille} cm</span>
</div>
</div>`);

const region= humain.adresse.ville.region;

document.write(region.nomination);
