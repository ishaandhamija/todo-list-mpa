var express = require ('express');
var router = express.Router();
const todoController = require ('../controllers/todos');

router.post('/addtodo', (req, res) => {
    var text = req.body.newtodo
    var userid = req.body.userid
    
    console.log('user_ki_id : ' + userid)
    
    return todoController.addTodo(text, userid)
        .then(todo => {
            res.send(todo)
//            return todo
        })
        .catch(err => {
            console.error (err)
        })
})

router.post('/updatechecked', (req, res) => {
    var todoid = req.body.todoid
    
    todoController.updateTodo(todoid)
        .then(result => {
            res.send('done')
        })
        .catch (err => {
            console.error (err)
        })
})

module.exports = router;
