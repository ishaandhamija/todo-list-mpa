const Models = require ('../models/index')
const Todo = Models.todo

const findAllTodos = (userid) => {
    return Todo.findAll({
        where: {
            user_id: userid
        }
    }).then(todos => {
        return todos
    })
    .catch (err => {
        console.error (err)
    })
}

const addTodo = (text, userid) => {
    return Todo.create({
        name: text, 
        checked: false,
        user_id: userid
    }).then(todo => {
        return todo
    }).catch(err => {
        console.error (err)
    })
}

const updateTodo = (todoid) => {
    return Todo.update({checked: true}, 
                       {where : {id: todoid}})
        .then(result => {
            console.log(result)
            return result
        })
        .catch (err => {
            console.error (err)
        })
}

module.exports = {
    findAllTodos, 
    addTodo,
    updateTodo
}
