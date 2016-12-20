const Connect = require('../db').Connect;
const ObjectID = require('../db').ObjectID;
// const co = require('co');
// const test = require('assert');

module.exports = {
  loadFavs (req, res, next) {
    Connect((db) => {
      console.log('>>>>>>>>> loadFavs');
      db.collection('tempCollection', (err, coll) => {
        coll.find({}).toArray()
        .then((result) => {
          console.log(result);
          res.json(result);
        });
      });
    });
  },

  saveFav (req, res, next) {
    Connect((db) => {
      console.log('>>>>>>>>> saveFav');
      db.collection('tempCollection', (err, coll) => {
        if (err) console.error(err);
        console.log(req.body);
        coll.save(req.body)
        .then((result) => {
          res.json(result);
        });
      });
    });
  },

  deleteFav (req, res, next) {
    Connect((db) => {
      console.log('>>>>>>>>> deleteFav');
      db.collection('tempCollection', (err, coll) => {
        if (err) console.error(err);
        console.log(req.body);
        coll.deleteOne({"_id": ObjectID(req.body.id)})
        .then((result) => {
          console.log('>> DELETED');
          res.json(result);
        });
      });
    });
  }
};