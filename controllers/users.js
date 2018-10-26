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

module.exports = {
	findAllUsers
}
