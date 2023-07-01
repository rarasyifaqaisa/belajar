const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Konfigurasi strategi autentikasi lokal
passport.use(
  new LocalStrategy((username, password, done) => {
    // Logika autentikasi berdasarkan username dan password
    // Lakukan validasi pengguna
    if (username === "admin" && password === "admin") {
      return done(null, { id: 1, username: "admin" });
    } else {
      return done(null, false);
    }
  })
);

// Menginisialisasi passport
app.use(passport.initialize());

// Menambahkan rute untuk login
app.post("/login", passport.authenticate("local", { session: false }), (req, res) => {
  // Jika autentikasi berhasil, kirimkan token JWT
  const user = req.user;
  const token = generateToken(user); // Fungsi untuk menghasilkan token JWT
  res.json({ token });
});

// Middleware untuk memeriksa otorisasi
const requireAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
      next(); // Lanjut ke rute berikutnya jika otorisasi berhasil
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
  
  // Rute yang memerlukan otorisasi
  app.get("/protected", requireAuth, (req, res) => {
    res.json({ message: "Protected resource" });
  });
  