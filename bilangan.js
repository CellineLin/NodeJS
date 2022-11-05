const express = require("express");
const bodyParser =require("body-parser");
const cors =require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.listen(8080, () => {
    console.log("server run on port 8080");
})

app.post("/decimal", (req, res) => {
    let dec = Number(req.body.dec)
    let bin = dec.toString(2)
    let oct = dec.toString(8)
    let hex = dec.toString(16).toUpperCase()

    let response = {
        decimal: dec,
        result: {
            biner: bin,
            oktal: oct,
            hexadesimal: hex
        }
    }
    res.json(response)
})

app.post("/binary", (req, res) => {
    let bin = Number(req.body.bin)
    let dec = parseInt(bin, 2)
    let oct = parseInt(bin, 2).toString(8)
    let hex = parseInt(bin, 2).toString(16).toUpperCase()

    let response = {
        biner: bin,
        result: {
            desimal: dec,
            oktal: oct,
            hexadesimal: hex
        }
    }
    res.json(response)
})

app.post("/octal", (req, res) =>{
    let oct = Number(req.body.oct)
    let dec = parseInt(oct, 8).toString(10)
    let bin = parseInt(oct, 8).toString(2)
    let hex = parseInt(oct, 8).toString(16).toUpperCase()

    let response = {
        oktal: oct,
        result: {
            desimal: dec,
            biner: bin,
            hexadesimal: hex
        }
    }
    res.json(response)
})

app.post("/hexadesimal", (req, res) =>{
    let hex = Number(req.body.hex).toString(16)

    let dec = parseInt(hex, 16).toString(10)
    let oct = parseInt(hex, 16).toString(8)
    let bin = parseInt(hex, 16).toString(2)


    let response = {
        hexadesimal: hex,
        result: {
            desimal: dec,
            oktal: oct,
            biner: bin,
        }
    }
    res.json(response)
})