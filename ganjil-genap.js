const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(8080, () => {
  console.log("server run on port 8080");
});

app.post("/ganjilgenap", (req, res) => {
    let nilai = Number(req.body.angka)
    let angka = ''

    let ket = ''
    if(nilai % 2 == 0) {
        ket = "Bilangan Genap"
    } else if (nilai % 2 == 1) {
        ket = "Bilangan Ganjil"
    }

    let response = {
        Angka:nilai,
        Bilangan: ket
    }

    res.json(response)
})