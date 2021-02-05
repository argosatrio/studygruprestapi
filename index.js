




const express = require('express')
let barang = ('./db/barang.json')
let kategori = ('./db/kategori.json')
let rak = ('./db/rak.json')
const app = express()



app.get('/v1/barang/:id', (req, res) => {
    const post = barang.find(i =>i.id === +req.params.id)
    res.status(200).json(barang)
})
app.get('/v1/kategori/:id', (req, res) => {
    const post = kategori.find(i =>i.id === +req.params.id)
    res.status(200).json(kategori)
})
app.get('/v1/rak/:id', (req, res) => {
    const post = rak.find(i =>i.id === +req.params.id)
    res.status(200).json(rak)
})



app.listen(3000, () => {
    console.log(' SERVER BERHASIL ')
})




