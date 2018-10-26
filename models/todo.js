'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    name: DataTypes.STRING,
    checked: DataTypes.BOOLEAN,
    user_id: DataTypes.BIGINT
  }, {});
  todo.associate = function(models) {
    // associations can be defined here
    const user = models.user;
 	todo.belongsTo (user, { foreignKey: 'user_id' })
 	user.hasMany (todo, { foreignKey: 'user_id' })
  };
  return todo;
};
