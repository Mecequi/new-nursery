// les fonctions en javascript
// somme est nommé par moi

function somme(x,y) {
  return x+y;
}
function soustraire(x,y) {
    return x-y;
  }
  
function multiplier(x,y) {
    return x*y;
  }
function diviser(x,y) {
    return x/y;
  }

  document.write(somme(20,5)+"<br>");
  document.write(soustraire(20,5)+"<br>");
  document.write(multiplier(20,5)+"<br>");
  document.write(diviser(20,5)+"<br>");
  
let paragraphe = document.querySelector("#info");

paragraphe.innerText = "on change le texte dans notre paragraphe";

let formulaire = document.querySelector("#form");
  
 console.log(formulaire);
 formulaire.addEventListener("submit",onSubmit);

 function onSubmit(event){
     event.preventDefault();
     paragraphe.innerText="le formulaire a bien été envoyé";
 }

 

