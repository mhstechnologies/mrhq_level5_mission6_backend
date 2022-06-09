const express = require("express");
const server = express();
const mongoserver = require('mongodb').MongoClient;
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const database = process.env.DATABASE || "mission6";
const port = process.env.PORT || 4000;
const url = process.env.URL || "mongodb://host.docker.internal:27017/";

// To help process requests easier
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false }));

server.use(cors());
server.use(express.static("./src"));
server.use(express.json());


// Connect to MongoDB database through your URL. 
// The connect() function takes a URL and callback function as arguments.
mongoserver.connect(url, (err, db) => {
  const dbo = db.db(database);
  const mysort = { name: 1 };

  // Responds to GET requests
  // Returns with the JSON data about the products
  // Example request: https://mynodeserver.com/sortedproducts
  server.get("/sortedproducts", (req, res) => {
    // search the database (collection) for all users with the `user` field being the `user` route paramter
    dbo.collection("products").find().sort(mysort).toArray(function(err, result) {
      if (err) {
        // if an error happens
        res.send("Error in GET req.");
      } else {
        // if all works
        res.send(result); // send back all results found sorted in order
      }
    });
  });
});

server.listen(port, () => {
  console.log('Listening to port', port);
});