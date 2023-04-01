const { DataTypes } = require ('sequelize'); // import Model
const { db } = require('../index');

const User = db.define('user', {
  name: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  badges: DataTypes.ARRAY(DataTypes.INTEGER),
  fridges: DataTypes.ARRAY(DataTypes.INTEGER),
})

module.exports = User;
