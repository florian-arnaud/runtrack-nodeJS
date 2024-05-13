/*
Récupérez le contenu du fichier data.txt de façon asynchrone, et affichez le
contenu dans le terminal. UNe lettre sur deux
*/

const fs = require('fs');;
let dataMissingLetters = ""
fs.readFile('data.txt', 'utf8', function(err, data){
    for (let i = 0; i < data.length; i++) {
        if(i % 2 == 0)
            {
                dataMissingLetters = dataMissingLetters + data[i];

            }

    }
    console.log(dataMissingLetters)

});
 