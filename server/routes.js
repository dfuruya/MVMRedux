const favController = require('./controllers/favController');
const searchController = require('./controllers/searchController');

module.exports = (app) => {
  app.get('/api/favs', favController.loadFavs);
  app.post('/api/favs', favController.saveFav);
  app.delete('/api/favs/:id', favController.deleteFav);

  app.post('/api/search', searchController.searchRecipes);
};
