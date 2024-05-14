/*
Écrire un script qui contient une constante nommée URL et qui a pour valeur :
“https://www.google.com&search=nodejs”.
À l’aide du module “url”, faire les actions suivantes :
➔ Récupérer le protocole utilisé
➔ Récupérer le nom d'hôte
➔ Récupérer les paramètres de l’URL
➔ Reformater l’URL en une nouvelle URL valide en modifiant le nom hôte
par “www.laplateforme.io”
➔ Ajouter à cette nouvelle URL un paramètre
➔ Afficher dans le terminal la nouvelle URL
*/


var url = require('url');
let myURL = new URL(`https://www.google.com&search=nodejs`);
let changedURL = new URL (myURL)

console.log("Protocole: " + myURL.protocol);
console.log("Host: " + myURL.hostname);
console.log("Paramètres: " + myURL.searchParams);

changedURL.host = "www.laplateforme.io"
changedURL.searchParams.set('search', 'nodejs')
let newURL = changedURL.toString();


console.log("Nouvelle URL: " +newURL);


