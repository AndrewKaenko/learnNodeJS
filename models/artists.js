var db = require("../db");
var ObjectId = require("mongodb").ObjectId;

exports.all = function (callBack) {
  db.get()
    .collection("artists")
    .find()
    .toArray((err, docs) => {
      callBack(err, docs);
    });
};

exports.findById = function (id, callBack) {
  db.get()
    .collection("artists")
    .findOne({ _id: ObjectId(id) }, function (err, doc) {
      callBack(err, doc);
    });
};

exports.create = function (artist, callBack) {
  db.get()
    .collection("artists")
    .insert(artist, (err, result) => {
      callBack(err, result);
    });
};

exports.update = function (id, newData, callBack) {
  db.get()
    .collection("artists")
    .replaceOne({ _id: ObjectId(id) }, newData, (err, result) => {
      callBack(err, result);
    });
};

exports.delete = function (id, callBack) {
  db.get()
    .collection("artists")
    .deleteOne({ _id: ObjectId(id) }, (err, result) => {
      callBack(err, result);
    });
};
