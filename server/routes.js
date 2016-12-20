const favController = require('./controllers/favController');
const searchController = require('./controllers/searchController');

module.exports = (app) => {
  app.get('/favs', favController.loadFavs);
  app.post('/favs', favController.saveFav);
  app.delete('/favs', favController.deleteFav);

  app.post('/search', searchController.searchRecipes);
};