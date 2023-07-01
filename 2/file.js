const fs = require("fs");

// Membaca isi file
fs.readFile("namafile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Isi file:", data);
});

// Menulis ke file
const content = "Teks yang akan ditulis ke file.";
fs.writeFile("namafile.txt", content, (err) => {
  if (err) throw err;
  console.log("File berhasil ditulis.");
});
