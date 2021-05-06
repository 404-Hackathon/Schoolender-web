const express = require("express");
const app = express();
const firebase = require("firebase");
const ofirebase = require("./saveData");
const bodyParser = require("body-parser");
const start = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get("/", (req, res) => {
    res.send("hello there");
  });
  app.post("/setEvent", (req, res) => {
    ofirebase.saveData(req.body, (err, data) => {
      res.send(data);
    });
  });
  console.log("routes are set, let's listen to the port ");
  app.listen(4000);
};
start();
