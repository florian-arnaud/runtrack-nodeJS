/* À l’aide du module “fs”, affichez l’ensemble des dossiers présents dans le
répertoire courant. Exécutez votre script pour vous assurer que tout
fonctionne comme prévu.
*/
const fs = require('fs');
const folder = "../"
fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });