const { DataTypes } = require ('sequelize'); // import Model
const { db } = require('../index');

const Fridge = db.define('fridge', {
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  status: DataTypes.STRING,
  inventory: DataTypes.ARRAY(DataTypes.STRING)
})

module.exports = Fridge;
