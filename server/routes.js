const favController = require('./controllers/favController');
const searchController = require('./controllers/searchController');

module.exports = (app) => {
  app.get('/api/favs', favController.loadFavs);
  app.post('/api/favs', 
    favController.dropFavs, 
    favController.saveFavs
  );

  app.post('/api/search', searchController.searchRecipes);
};