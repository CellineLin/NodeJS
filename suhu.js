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

app.get("/celcius/:celcius", (req, res) => {
    let celcius = Number(req.params.celcius)

    let reamur = 4/5 * celcius
    let fahrenheit = (celcius * 9/5) + 32
    let kelvin = celcius + 273.15

    let response = {
        celcius: celcius,
        reamur: reamur,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    }
    res.json(response)
})

app.get("/reamur/:reamur", (req, res) => {
    let reamur = Number(req.params.reamur)

    let celcius = 5/4 * reamur
    let fahrenheit = (reamur * 9/4) + 32
    let kelvin = 4/5 * (kelvin - 273)

    let response = {
        reamur: reamur,
        celcius: celcius,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    }
    res.json(response)
})

app.get("/fahrenheit/:fahrenheit", (req, res) => {
    let fahrenheit = Number(req.params.fahrenheit)

    let celcius = (9/5 * fahrenheit) + 32
    let reamur = (fahrenheit * 9/4) + 32
    let kelvin = (fahrenheit + 459.67) * 5/9

    let response = {
        reamur: reamur,
        celcius: celcius,
        kelvin: kelvin
    }
    res.json(response)
})

app.get("/kelvin/:kelvin", (req, res) => {
    let kelvin = Number(req.params.kelvin)

    let celcius = kelvin - 273
    let reamur = 4/5 * (kelvin - 273)
    let fahrenheit = 9/5 * (kelvin - 273) + 32

    let response = {
        celcius: celcius,
        reamur: reamur,
        fahrenheit: fahrenheit
    }
    res.json(response)
})