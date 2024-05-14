/*
À l’aide d’un module “path” que vous aurez importé, réalisez les actions
suivantes :

➔ Récupérez le nom du fichier.
➔ Récupérez l'extension du fichier.
➔ Récupérez le répertoire parent du fichier.
*/
const path = require('path');
const pathFile = "job5/index.js";
let fileExtension = path.extname(pathFile)
let fileName = path.basename(pathFile, fileExtension);
let folder = path.dirname(pathFile)

console.log("Nom du fichier:" + fileName);
console.log("Extension: " + fileExtension);
console.log("Dossier: " + folder);