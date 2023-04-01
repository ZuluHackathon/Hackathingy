/* ⇠ ⇡ ⇢ ⇣ */
/* ۞ ꙰ べ */
const express = require('express');
const path = require('path');

const app = express();
const PORT = 9090;
const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');

const db = require('../db/index');

const serveHome = (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
};
/*
  べべべべべべべべべべべ
  べべ middleware べべ
  べべべべべべべべべべべ
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));
/*
  べべべべべべべべべべ
  べべ endpoints べべ
  べべべべべべべべべべ
*/
app.get('/', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

module.exports = { app };
