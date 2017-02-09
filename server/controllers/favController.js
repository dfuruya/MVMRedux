const Connect = require('../db').Connect;
const ObjectID = require('../db').ObjectID;
const USERS_COLLECTION = 'users';

module.exports = {
  saveFav (req, res, next) {
    Connect(db => {
      db.createCollection(USERS_COLLECTION, (err, coll) => {
        console.log('<<<<<< saving fav:', req.body.favorites.label);
        // coll.save(req.body)
        coll.findOneAndUpdate(
          {userName: req.body.userName},
          {$push: {
            favorites: {
              $each: [req.body.favorites],
              $position: 0
            }
          }},
          {upsert: true}
        )
        .then(result => {
          res.json(req.body.favorites);
        });
      });
    });
  },

  deleteFav (req, res, next) {
    Connect(db => {
      db.collection(USERS_COLLECTION, (err, coll) => {
        console.log('^^^^^^ deleting fav id:', req.params.id);
        // coll.remove({"_id": ObjectID(req.params.id)})
        // coll.remove({"recipe_id": req.params.id})
        coll.findOneAndUpdate(
          {userName: req.params.user},
          {$pull: {
            favorites: {
              recipe_id: req.params.id
            }
          }}
        )
        .then(result => {
          res.json(result);
        });
      });
    });
  },
  
  loadFavs (req, res, next) {
    Connect(db => {
      db.collection(USERS_COLLECTION, (err, coll) => {
        coll.find({}).toArray()
        .then(result => {
          console.log('>>>>>> loading fav:', result);
          res.json(result);
        });
      });
    });
  },
};