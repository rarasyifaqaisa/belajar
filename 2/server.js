const http = require("http");

// Membuat server HTTP
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, Node.js HTTP server!");
});

// Menjalankan server pada port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Server berjalan pada http://127.0.0.1:3000/");
});
