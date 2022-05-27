let premiere = 4;
let deuxieme = 18;
let temp = 0;

console.log(">>>>>>>>>>>> AVANT >>>>>>>>>>");

console.log("premiere = ", premiere);
console.log("deuxieme = ", deuxieme);
console.log("temp =", temp);


console.log(">>>>>>>>>>>> APRES >>>>>>>>>>");

temp = premiere;
premiere = deuxieme;
deuxieme = temp;

console.log("premiere = ", premiere);
console.log("deuxieme = ", deuxieme);
console.log("temp =", temp);
console.log("temp=0");

console.log(">>>>>>TABLEAU<<<<<<<");
let numbers = [22, 33, 65, 110, 152, 656456];
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

numbers.unshift(1);
numbers.push(007);

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

for (let i = 0; i < numbers.length; i = i + 1) {
    console.log(i);
    const element = numbers[i];
    document.write(`<br/> iteration n°${i} donne element ${element} <br>`); // ES6
    document.write("<br/> iteration n°" + i + " donne element " + element + " <br> "); // vanilla ( classique )

}

let i = 0;

while (i < numbers.length) {
    const element = numbers[i];
    document.write(`<br/> while iteration n°${i} => ${element} <br/>`);
    i++;

}



let number = 0;
const peoplenumber = () => {  
    
    number = parseInt("combien de personne?");
while (isNaN(number) || number < 1) {
    alert("une valeur numérique positive esr requise");
    number = parseInt(prompt(" combien de personne?"));
    return number;
}

const checkNumber = () => {
    let nbpeople = peopleNumber();
    switch (true) {
        case nbpeople < 6:
            alert("Non Autorisé=135€");
            breack;
        default: console.log("error")

    } }
    
    }

 "Toto mange une cote de boeuf" ;
 
 





