const path = require("path");

// Menyatukan jalur direktori
const path1 = path.join(__dirname, "folder", "file.txt");
console.log("Path Gabungan:", path1);

// Mendapatkan nama direktori
const dirName = path.dirname(path1);
console.log("Nama Direktori:", dirName);

// Mendapatkan ekstensi file
const extName = path.extname(path1);
console.log("Ekstensi File:", extName);

// Mendapatkan nama file tanpa ekstensi
const baseName = path.basename(path1, extName);
console.log("Nama File:", baseName);
