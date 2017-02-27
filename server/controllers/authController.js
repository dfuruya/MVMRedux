const Connect = require('../db').Connect;
const ObjectID = require('../db').ObjectID;
const USERS_COLLECTION = 'users';

module.exports = {
  saveUser (req, res, next) {
    Connect(db => {
      db.createCollection(USERS_COLLECTION, (err, coll) => {
        const userName = req.body.usernameInput;
        console.log('<<<<<< saving user:', userName);
        coll.findOne({ userName })
        .then(result => {
          if (result) {
            console.log('Username already exists!');
            res.status(404).end();
          }
          coll.save({
            userName,
            passWord: req.body.passwordInput,
          })
          .then(result => {
            // TODO: fix hard-coded jwToken
            const jwToken = 'save-token';
            res.json({ userName, jwToken });
          });
        });
      });
    });
  },

  fetchUser (req, res, next) {
    const userName = req.body.usernameInput;
    const passWord = req.body.passwordInput;
    Connect(db => {
      db.collection(USERS_COLLECTION, (err, coll) => {
        coll.findOne({ userName })
        .then(result => {
          if (!result) {
            console.log('Username does not exist!');
            res.status(404).end();
          }
          console.log('fetchUser result:', result);
          coll.findOne({
            userName,
            passWord,
          })
          .then(result => {
            if (!result) {
              console.log('The password you entered does not match our records!');
              res.status(404).end();
            }
            const { userName, favorites } = result;
            // TODO: fix hard-coded jwToken
            const jwToken = 'fetch-token';
            res.json({ userName, favorites, jwToken });
          });
        });
      });
    });
  },
};