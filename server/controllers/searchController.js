const Connect = require('../db').Connect;
const ObjectID = require('../db').ObjectID;
// const co = require('co');
// const test = require('assert');
const axios = require('axios');

const F2F_API_KEY = require('../../config.env')[process.env.NODE_ENV].F2F_API_KEY;
const recipeQueryURL = `http://food2fork.com/api/search?key=${F2F_API_KEY}&q=`;

module.exports = {
  searchRecipes (req, res, next) {
    console.log('>>> searchRecipes req is: ', recipeQueryURL + req.body.q);
    axios.get(recipeQueryURL + req.body.q)
    .then((response) => {
      console.log('>>> searchRecipes: received response: ', response.data);
      res.json(response.data);
    });
    // Connect((db) => {
    //   console.log('>>>>>>>>> searchRecipes');
    //   db.collection('tempCollection', (err, coll) => {
    //     coll.find({}).toArray()
    //     .then((result) => {
    //       console.log(result);
    //       res.json(result);
    //     });
    //   });
    // });
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