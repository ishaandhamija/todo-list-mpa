//const User = require('../models/user');
const Models = require('../models/index');
const User = Models.user

const findAllUsers = ()=> {

	return User.findAll().then((users)=>{
        return users
	})
	.catch((err)=>{
		console.error(err)
	})
}

const insertUser = (uname, pass) => {
    
    return User.create ({
        name: uname,
        password: pass
    }).then(user => {
        console.log(user)
        return user
    }).catch(err => {
        console.error (err)
    })
}

const findUserByNameAndPass = (uname, pass) => {
    
    return User.findAll({
        where: {
            name: uname,
            password: pass
        }
    }).then(user => {
        console.log ('hua_kuch')
        return user
    }).catch(err => {
        console.log ('error_found' + err)
    })
}

module.exports = {
	findAllUsers, 
    insertUser,
    findUserByNameAndPass
}
