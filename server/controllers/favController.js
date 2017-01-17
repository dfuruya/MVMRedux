const Connect = require('../db').Connect;
const ObjectID = require('../db').ObjectID;

module.exports = {
  loadFavs (req, res, next) {
    Connect((db) => {
      console.log('>>>>>>>>> loadFavs');
      db.collection('favorites', (err, coll) => {
        if (err) return console.error(err);
        coll.find({}).toArray()
        .then((result) => {
          console.log(result);
          res.json(result);
        });
      });
    });
  },

  saveFavs (req, res, next) {
    Connect((db) => {
      console.log('<<<<<<<<< saveFavs');
      db.collection('favorites', (err, coll) => {
        if (err) return console.error(err);
        coll.insertMany(req.body)
        .then((result) => {
          res.json(result);
        });
      });
    });
  },

  dropFavs (req, res, next) {
    Connect((db) => {
      console.log('>>>>>>>>> dropFavs');
      db.collection('favorites').drop()
      .then(() => { 
        next(); 
      });
    });
  },

  // deleteFav (req, res, next) {
  //   Connect((db) => {
  //     console.log('>>>>>>>>> deleteFav');
  //     db.collection('favorites', (err, coll) => {
  //       if (err) return console.error(err);
  //       console.log(req.body);
  //       coll.deleteOne({"_id": ObjectID(req.body.id)})
  //       .then((result) => {
  //         console.log('>> DELETED');
  //         res.json(result);
  //       });
  //     });
  //   });
  // }
};