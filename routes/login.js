var express = require('express');
var router = express.Router();
const userController = require ('../controllers/users');
const todoController = require ('../controllers/todos');

/* GET users listing. */
router.get('/', function(req, res, next) {    
  res.render('login')
});

router.post('/abc', (req, res) => {
    var uname = req.body.uname
    var pass = req.body.pass
    
    userController.findUserByNameAndPass(uname, pass)
        .then(user => {
            console.log('humara_user : ' + user[0].name)
            var id = user[0].id;
            var uname = user[0].name;
            
            return todoController.findAllTodos(id).then(todos => {
                res.render ('dashboard', {
                    u_id: id,
                    u_name: uname,
                    u_todos: todos
                })  
            })
        })
        .catch (err => {
            console.error (err)
        })
})

module.exports = router;
