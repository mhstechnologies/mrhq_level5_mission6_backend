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

const object2 = { 
  name: "Pedigree Adult Dry Dog Food With Real Beef", 
  description: "Enriched with Vitamin E to help support the immune system.",
  quantity: 10
}

const object3 = {
  name: "Natures Goodness Chicken with Duck", 
  description: "It offers a natural, grainfree dry food made with holistic ingredients. This product is complete and balanced for all breeds and sizes of adult dogs",
  quantity: 2
}

const object4 = {
  name: "Friskies Wet Extra Gravy Chicken", 
  description: "This yummy mix of extra gravy with chicken in savoury gravy is super gravy-licious for chicken ‘n’ gravy loving cats!",
  quantity: 8
}

MongoClient.connect(url, function (err, db) {
  if(err) throw err;
  
  const dbo = db.db(database);

  dbo.collection("products").insertOne(object0, function(err, res) {
    if (err) throw err;
  });

  dbo.collection("products").insertOne(object1, function(err, res) {
    if (err) throw err;
  });

  dbo.collection("products").insertOne(object2, function(err, res) {
    if (err) throw err;
  });

  dbo.collection("products").insertOne(object3, function(err, res) {
    if (err) throw err;
  });

  dbo.collection("products").insertOne(object4, function(err, res) {
    if (err) throw err;
    console.log("documents inserted!");
    db.close();
  });             
});