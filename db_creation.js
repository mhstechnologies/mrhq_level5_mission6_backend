const dotenv = require("dotenv");
const MongoClient = require('mongodb').MongoClient;

dotenv.config();

const url = process.env.URL;
const database = process.env.DATABASE;

//Objects
  const object0 = { 
    name: "Royal Canin Aroma Exigent Attraction Dry Cat Food", 
    description: "Perfect for the fussy cat, a complete and balanced nutritional diet.",
    quantity: 6
  }

  const object1 = {
    name: "Royal Canin Mini Wet Puppy Food", 
    description: "This wet dog food is both scrummy and nutritious! Developed with all t...",
    quantity: 3
  }

MongoClient.connect(url, function (err, db) {
  if(err) throw err;
  
  const dbo = db.db(database);

  dbo.collection("products").insertOne(object0, function(err, res) {
    if (err) throw err;
  });

  dbo.collection("products").insertOne(object1, function(err, res) {
    if (err) throw err;
    console.log("documents inserted!");
    db.close();
  });             
});