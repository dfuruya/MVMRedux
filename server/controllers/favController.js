const Connect = require('../db').Connect;
const ObjectID = require('../db').ObjectID;

module.exports = {
  saveFav (req, res, next) {
    Connect((db) => {
      db.createCollection('favorites', (err, coll) => {
        console.log('<<<<<< saving fav:', req.body.label);
        coll.save(req.body)
        .then((result) => {
          res.json(result);
        });
      });
    });
  },

  deleteFav (req, res, next) {
    Connect((db) => {
      db.collection('favorites', (err, coll) => {
        console.log('^^^^^^ deleting fav id:', req.params.id);
        // coll.remove({"_id": ObjectID(req.params.id)})
        coll.remove({"recipe_id": req.params.id})
        .then((result) => {
          res.json(result);
        });
      });
    });
  },
  
  loadFavs (req, res, next) {
    Connect((db) => {
      db.collection('favorites', (err, coll) => {
        coll.find({}).toArray()
        .then((result) => {
          console.log('>>>>>> loading fav:', result);
          res.json(result);
        });
      });
    });
  },
};