const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors()) 


   app.post("/operasi_hitung", (req, res) => {
    let angka1 = Number(req.body.angka1)
    let angka2 = Number(req.body.angka2)

    let penjumlahan = angka1 + angka2
    let pengurangan  = angka2 - angka1
    let perkalian = angka1 * angka2
    let pembagian = angka2 / angka1

    let response = {
        angka1 : angka1,
        angka2 : angka2,
        penjumlahan : penjumlahan,
        pengurangan : pengurangan,
        perkalian : perkalian,
        pembagian : pembagian
    }
    res.json(response)
})


app.post("/perulanganFor", (req, res) => {
    let awal = Number(req.body.awal)
    let akhir = Number(req.body.akhir)
    let kelipatan = Number(req.body.kelipatan)
    let tampung= new Array()
    let total = 0
    let i = awal

    for (i ; i <= akhir ; i += kelipatan) {
        tampung.push(i)
            total =+ i
        }
        
        let response = {
            tampung,
            total : total
            // awal,
            // akhir,
            // kelipatan
        }
        res.json(response)
    })

app.post("/PenjumlahanArray", (req, res) => {
    let MatrixA = [
        [1,2],
        [3,4]
    ];

    let MatrixB = [
        [1,2],
        [4,6]
    ];

    let hasil = new Array()
    let i
    let j
    for (i = 0; i < 2; i++){
        for (j = 0; j < 2; j++) {
            hasil.push(MatrixA[i][j] + MatrixB[i][j])
        }
    }

    let response = {
        MatrixA : MatrixA,
        MatrixB : MatrixB,
        penjumlahan: hasil
    }

    res.json(response)
})

app.listen(8002, () => {
    console.log("server run on port 8002");
})