const dotenv = require("dotenv");
const MongoClient = require('mongodb').MongoClient;

dotenv.config();

const url = process.env.URL;
const database = process.env.DATABASE;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(database);
  dbo.collection("products").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 