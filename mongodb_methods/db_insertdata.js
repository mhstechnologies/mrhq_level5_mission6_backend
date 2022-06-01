const dotenv = require("dotenv");
const MongoClient = require('mongodb').MongoClient;

dotenv.config();

const url = process.env.URL;
const database = process.env.DATABASE;

//Objects
const myobjects = [
  { name: "Pro Plan Adult Medium & Large Breed Sensitive Skin & Coat", 
    description: "PRO PLAN® DOG FOOD MEDIUM & LARGE ADULT SENSITIVE SKIN AND COAT is formulated to meet the nutritional levels established by AAFCO (Association of American Feed Control Officials) Dog Food Nutrient Profiles for Adult maintenance.",
    quantity: 6,
    price: "$158.99",
    img_path: "/proplanadult.png" 
  },
  { name: "Iams Proactive Health Chicken Large Breed Dry Dog Food", 
    description: "IAMS large breed dog food is complete and balanced nutrition that contains a natural source of glucosamine to help support healthy joints.",
    quantity: 3,
    price: "$109.99",
    img_path: "/iamsdrydogfood.jpeg"
  },
  { name: "Eukanuba Weight Control Large Breed Adult Dry Dog Food", 
    description: "It contains 30% less fat (vs. Eukanuba™ Adult Large Breed), as well as high-quality ingredients including animal-based protein, fat, carbohydrates, fibres and important vitamins and minerals for the health and well being of your adult dog",
    quantity: 5,
    price: "$131.99",
    img_path: "/eukanubadrydogfood.jpeg"
  },
    { name: "Royal Canin Maxi Joint Care Dry Dog Food", 
    description: "This recipe that is designed to counteract these issues, promoting improved mobility and providing your adult dog with a balanced nutrient complex. It contains hydrolysates from cartilage, which are a useful source of chondroitin and glucosamine to support the health of your dog's joints.",
    quantity: 20,
    price: "$109.99",
    img_path: "/royalcaninmaxijoint.jpeg"
  },
  { name: "Nutrience Original Medium Breed Adult Dry Dog Food", 
    description: "Nutrience Dog food has no by-products, filers or added glutens.",
    quantity: 10,
    price: "$108.99",
    img_path: "/nutriencedrydogfood.png"
  }
]

MongoClient.connect(url, function (err, db) {
  if(err) throw err;
  
  const dbo = db.db(database);

  dbo.collection("products").insertMany(myobjects, function(err, res) {
    if (err) throw err;
    console.log("Object inserted!");
    db.close();
  });             
});