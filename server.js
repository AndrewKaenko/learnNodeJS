var express = require("express");
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
var db = require("./db");
var artistsController = require("./controllers/artists");

// let db;

var dataCluster =
  "mongodb+srv://admin:0123456789@cluster0.jne8l.mongodb.net/artists?retryWrites=true&w=majority";

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello API");
});

app.get("/artists", artistsController.all);

app.get("/artists/:id", artistsController.findById);

app.post("/artists", artistsController.create);

app.put("/artists/:id", artistsController.update);

// app.put("/artists/:id", function (req, res) {
//   db.collection("artists").updateOne(
//     { _id: ObjectId(req.params.id) },
//     { name: req.body.name },
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         return res.sendStatus(500);
//       }
//       res.sendStatus(200);
//     }
//   );
// var artist = artists.find((artist) => {
//   return artist.id === Number(req.params.id);
// });
// artist.name = req.body.name;
// res.sendStatus(200);
// });

app.delete("/artists/:id", artistsController.delete);

db.connect(dataCluster, (err, database) => {
  if (err) {
    return console.log(err);
  }
  app.listen(3012, () => console.log("API app started"));
});

// const dbClient = new MongoClient(dataCluster);

// dbClient.connect((err, database) => {
//   if (err) {
//     return console.log(err);
//   }
//   db = database.db("artists");
//   app.listen(3012, () => console.log("API app started"));
// });
