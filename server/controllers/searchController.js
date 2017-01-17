const Connect = require('../db').Connect;
const ObjectID = require('../db').ObjectID;
const axios = require('axios');

// const F2F_API_KEY = require('../../config.env')[process.env.NODE_ENV].F2F_API_KEY;
// const recipeQueryURL = `http://food2fork.com/api/search?key=${F2F_API_KEY}&q=`;
const keys = require('../../config.env')[process.env.NODE_ENV];
const APP_ID = keys.APP_ID;
const APP_KEY = keys.APP_KEY;
const recipeQueryURL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=`;

module.exports = {
  searchRecipes(req, res, next) {
    console.log('>>> req is: ', recipeQueryURL + req.body.q);
    axios.get(recipeQueryURL + req.body.q)
    .then((response) => {
      console.log('>>> searchRecipes: received response: ', response.data.hits);
      res.json(response.data.hits);
    });
  }
};