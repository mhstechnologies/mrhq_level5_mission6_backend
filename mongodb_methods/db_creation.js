const dotenv = require("dotenv");
const MongoClient = require('mongodb').MongoClient;

dotenv.config();

const url = process.env.URL;
const database = process.env.DATABASE;


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  const dbo = db.db(database);
  
  dbo.createCollection("products", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 