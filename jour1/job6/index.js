/*
Récupérez le contenu du fichier data.txt de façon synchrone, et affichez le
contenu dans le terminal.
*/
const fs = require('fs');;
const data = fs.readFileSync('data.txt',
    { encoding: 'utf8', flag: 'r' });
console.log("Contenu du fichier data.txt: ");
console.log(data)