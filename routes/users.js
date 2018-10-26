var express = require('express');
var router = express.Router();

const Users = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = Users.findAllUsers().then(users => {
      res.send(users)
  })
});

module.exports = router;
