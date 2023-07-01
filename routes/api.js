const express = require("express");
const router = express.Router();

// Rute GET
router.get("/users", (req, res) => {
  res.json({ message: "Daftar pengguna" });
});

// Rute POST
router.post("/users", (req, res) => {
  const { username, email } = req.body;
  // Proses penyimpanan pengguna ke basis data
  res.json({ message: "Pengguna berhasil ditambahkan", username, email });
});

// Rute PUT
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  // Proses pembaruan pengguna dengan ID tertentu di basis data
  res.json({ message: `Pengguna dengan ID ${id} berhasil diperbarui`, username, email });
});

// Rute DELETE
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  // Proses penghapusan pengguna dengan ID tertentu dari basis data
  res.json({ message: `Pengguna dengan ID ${id} berhasil dihapus` });
});

module.exports = router;
