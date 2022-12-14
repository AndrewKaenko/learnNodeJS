var Artists = require("../models/artists");

exports.all = function (req, res) {
  Artists.all((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

exports.findById = function (req, res) {
  Artists.findById(req.params.id, (err, doc) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

exports.create = function (req, res) {
  var artist = {
    name: req.body.name,
  };
  Artists.create(artist, (err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(artist);
  });
};

exports.update = function (req, res) {
  var newData = {
    name: req.body.name,
  };
  Artists.update(req, params.id, newData, (err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

exports.delete = function (req, res) {
  Artists.delete(req.params.id, (err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
