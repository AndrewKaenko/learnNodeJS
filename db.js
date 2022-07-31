var MongoClient = require("mongodb").MongoClient;

var state = {
  db: null,
};

exports.connect = function (url, done) {
  if (state.db) {
    return done();
  }

  //   const dbClient = new MongoClient();

  MongoClient.connect(url, (err, database) => {
    if (err) {
      return done(err);
    }
    state.db = database.db("artists");
    done();
  });
};
exports.get = function () {
  return state.db;
};
