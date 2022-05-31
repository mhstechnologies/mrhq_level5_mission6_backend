const dotenv = require("dotenv");
const MongoClient = require('mongodb').MongoClient;

dotenv.config();

const url = process.env.URL;
const database = process.env.DATABASE;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  const dbo = db.db(database);
  const mysort = { name: 1 };
  
  dbo.collection("products").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 