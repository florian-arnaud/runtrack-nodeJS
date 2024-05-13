/*
Écrire un programme qui modifie le contenu du fichier data.txt. Remplacez le
contenu existant par : “Je manipule les fichiers avec un module node !”.
*/

var fs = require('fs');
let newData = "Je manipule les fichiers avec un module node !"
fs.writeFile('data.txt', newData, function (err) {
    if (err) throw err;
    fs.readFile('data.txt', 'utf8', function (err, data) {
        console.log(data);
    });
}); 