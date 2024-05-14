/*
Récupérez le contenu du fichier data.txt de façon asynchrone, et affichez le
contenu dans le terminal.
*/
const fs = require('fs');;
fs.readFile('data.txt', 'utf8', function(err, data){
    console.log(data);
});
 