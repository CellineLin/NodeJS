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

app.post("/bmi", (req, res) => {
  let BB = Number(req.body.BB)
  let TB = Number(req.body.TB)
  let bmi = BB / (TB * TB)
  let status = ""

  if (bmi < 18.5) {
    status = "Berat badan di bawah ideal"
  } 
    else if (bmi >= 18.5 && bmi < 25) {
    status = "Berat badan ideal"
  } 
    else if (bmi >= 25 && bmi < 30) {
    status = "Berat badan di atas ideal"
  } 
    else if (bmi >= 30) {
    status = "Berat badan obesitas"
  }

  let response = {
    berat: BB,
    tinggi: TB,
    bmi: bmi,
    keterangan: status
  };
  res.json(response);
});
