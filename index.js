const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File: app.js

const sequelize = require("./dbConnection/database");
const CricketerBio = require("./model/circket");

app.get("/", (req, res) => {
  CricketerBio.findAll()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.post("/circketerbio", (req, res) => {
  const {
    name,
    dob,
    photoUrl,
    birthPlace,
    carrer,
    noOfMatches,
    score,
    fifties,
    centuries,
    wickets,
    average,
  } = req.body;
  CricketerBio.create({
    name: name,
    dob: dob,
    photoUrl: photoUrl,
    birthPlace: birthPlace,
    carrer: carrer,
    noOfMatches: noOfMatches,
    score: score,
    fifties: fifties,
    centuries: centuries,
    wickets: wickets,
    average: average,
  })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

  res.send("Data Addes Successfully");
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const {
    name,
    dob,
    photoUrl,
    birthPlace,
    carrer,
    noOfMatches,
    score,
    fifties,
    centuries,
    wickets,
    average,
  } = req.body;
  CricketerBio.findByPk(id)
    .then((product) => {
      product.name = name;
      product.dob = dob;
      product.photoUrl = photoUrl;
      product.birthPlace = birthPlace;
      product.carrer = carrer;
      product.noOfMatches = noOfMatches;
      product.score = score;
      product.fifties = fifties;
      product.centuries = centuries;
      product.wickets = wickets;
      product.average = average;
      return product.save();
    })
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  CricketerBio.findByPk(id)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

sequelize
  .sync()
  .then((response) => {
    // console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
