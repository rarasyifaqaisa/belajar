const express = require("express");
const app = express();
const port = 3001;

// Menyiapkan router API
const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}/`);
});
