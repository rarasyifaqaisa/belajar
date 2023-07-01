const mysql = require("mysql");

// Membuat koneksi database
const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "nama-database",
});

// Menghubungkan ke database
connection.connect((err) => {
  if (err) throw err;
  console.log("Terhubung ke database mysql");
});

// Mengeksekusi query SELECT
connection.query("SELECT * FROM belajar", (err, results) => {
    if (err) throw err;
    console.log("Data pengguna:", results);
  });
  
// Menutup koneksi database
connection.end((err) => {
    if (err) throw err;
    console.log("Koneksi database ditutup");
  });
  