const express = require("express");
let barang = require("./db/barang.json");
let kategori = require("./db/kategori.json");
let rak = require("./db/rak.json");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get
app.get("/v1/barang", (req, res) => {
  res.status(200).json(barang);
});
app.get("/v1/kategori", (req, res) => {
  res.status(200).json(kategori);
});
app.get("/v1/rak", (req, res) => {
  res.status(200).json(rak);
});

app.get("/v1/barang/:id", (req, res) => {
  const post = barang.find((i) => i.id === +req.params.id);
  res.status(200).json(barang);
});
app.get("/v1/kategori/:id", (req, res) => {
  const post = kategori.find((i) => i.id === +req.params.id);
  res.status(200).json(kategori);
});
app.get("/v1/rak/:id", (req, res) => {
  const post = rak.find((i) => i.id === +req.params.id);
  res.status(200).json(rak);
});

// post
app.post(`/v1/barang`, (req, res) => {
  const { NAMA, KATEGORI, STOCK, RAK } = req.body;

  const ID = barang[barang.length - 1].ID + 1;
  const post = {
    ID,
    NAMA,
    KATEGORI,
    STOCK,
    RAK,
  };

  barang.push(post);
  res.status(201).json(barang);
});

app.listen(3000, () => {
  console.log(" SERVER BERHASIL ");
});
