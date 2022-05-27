/* Un bloc de commentaire
*/

--une ligne de commentaire

/* Creation de la table Personnes */

CREATE TABLE Personnes(
    Id_personne int PRIMARY KEY NOT NULL,
    prenom varchar(20),
    age int,
    metier varchar(20)
);

/* Creation de 5 personnes */

INSERT INTO Personnes VALUES(1,'Tom', 28 , 'Cuisinier');

INSERT INTO Personnes VALUES(2,'Lucy', 18 , 'Etudiante');

INSERT INTO Personnes VALUES(3,'Frank', 31 , 'Cariste');

INSERT INTO Personnes VALUES(4,'Jane', 21 , 'Musicienne' );

INSERT INTO Personnes VALUES(5,'Robert', 54 , 'Chauffeur');

SELECT* FROM personnes;

SELECT id_personne, prenom FROM personnes;

SELECT prenom FROM personnes;

SELECT age, metier FROM personnes;

SELECT* FROM personnes WHERE age < 50;

SELECT* FROM personnes WHERE id_personne <3;

SELECT distinct metier FROM personnes;

SELECT * FROM personnes WHERE prenom ='Lucy';

SELECT * FROM personnes WHERE age = 21 AND metier = 'Musicienne';

SELECT * FROM personnes WHERE METIER = 'Cuisinier'OR METIER = 'Chauffeur';


SELECT * FROM personnes WHERE NOT metier = 'Cariste';

SELECT * FROM personnes WHERE age>20;

SELECT * FROM personnes WHERE age<40 AND id_personne>2;

SELECT * FROM personnes WHERE prenom LIKE 'Ja%ne';

SELECT * FROM personnes WHERE prenom LIKE '%o%';

SELECT * FROM personnes WHERE metier LIKE '%e%' AND metier LIKE'%r%';

SELECT * FROM personnes WHERE metier IN ('Cariste', 'Etudiante', 'Cuisinier');

SELECT * FROM personnes WHERE age BETWEEN 20 and 40;

SELECT * FROM personnes ORDER BY age;

SELECT * FROM personnes ORDER BY age DESC;

SELECT * FROM personnes WHERE age BETWEEN 20 AND 40 ORDER BY age DESC

