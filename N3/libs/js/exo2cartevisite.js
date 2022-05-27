const moi={
    nom : "Dx",
    prenom : "Audrey",
    taille : 177,
    age : 50,
    sex : true,
    birthday : "22/04/1972",
    img: "https://i.pinimg.com/736x/cd/31/23/cd31230aa7726c475b742a28b406a060.jpg",
    adresse:{
        rue: "rue du général Leclerc",
        num: 59,
        ville:{
            cp:59000,
            nom:"Lille",
        }
    }
};

document.write(`<div>
<img src=${moi.img} />
<div>
<h1>${moi.nom}</h1><br/>
<h2>${moi.prenom}</h2>
<span>${moi.taille} cm</span><br/>
<span>${moi.age} ans</span><br/>
<span>${moi.birthday}</span><br/>
<span>${moi.sex ? "femme":"homme"}</span><br/>


</div>
</div>`);


