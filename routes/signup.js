var express = require('express');
var router = express.Router();
const userController = require ('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {    
  res.render('signup')
});

router.post('/abc', (req, res) => {
    var uname = req.body.uname
    var pass = req.body.pass
    
    userController.insertUser(uname, pass)
        .then(user => {
            res.redirect('/login')
        })
        .catch(err => {
            console.error(err)
            res.send('error')
        })
})

module.exports = router;
