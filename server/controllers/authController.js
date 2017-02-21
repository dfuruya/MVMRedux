const Connect = require('../db').Connect;
const ObjectID = require('../db').ObjectID;
const USERS_COLLECTION = 'users';

module.exports = {
  saveUser (req, res, next) {
    Connect(db => {
      db.createCollection(USERS_COLLECTION, (err, coll) => {
        console.log('<<<<<< saving user:', req.body.usernameInput);
        coll.save({
          userName: req.body.usernameInput,
          passWord: req.body.passwordInput,
        })
        .then(result => {
          const jwToken = 'testtoken';
          res.json({ jwToken });
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
            res.status(404).end('Username does not exist!');
          }
          console.log('fetchUser result:', result);
          coll.findOne({
            userName,
            passWord,
          })
          .then(result => {
            if (!result) {
              console.log('The password you entered does not match our records!');
              res.status(404).end('The password you entered does not match our records!');
            }
            res.json(userName);
          });
        });
      });
    });
  },
};