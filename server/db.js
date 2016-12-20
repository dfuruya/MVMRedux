const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let db;

// Initialize our connection to MongoDB once
MongoClient.connect("mongodb://localhost:27017/test", (err, database) => {
  if (err) return console.error(err);
  db = database;
});

exports.Connect = (callback) => { callback(db) };

exports.MongoClient = MongoClient;
exports.ObjectID = mongodb.ObjectID;