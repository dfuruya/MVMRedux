const favController = require('./controllers/favController');
const searchController = require('./controllers/searchController');
const authController = require('./controllers/authController');

module.exports = (app) => {
  app.get('/api/favs', favController.loadFavs);
  app.post('/api/favs', favController.saveFav);
  app.delete('/api/favs/:user/:id', favController.deleteFav);

  app.post('/api/search', searchController.searchRecipes);

  app.post('/api/signup', authController.saveUser);
  app.post('/api/login', authController.fetchUser);
};
