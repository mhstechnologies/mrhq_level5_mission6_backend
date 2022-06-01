const dotenv = require("dotenv");
const MongoClient = require('mongodb').MongoClient;

dotenv.config();

const url = process.env.URL;
const database = process.env.DATABASE;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mission6");
  dbo.collection("products").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
}); 