import { DataTypes } from 'sequelize'; // import Model
import { db } from '../index';

const Fridge = db.define('fridge', {
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  status: DataTypes.STRING,
  inventory: DataTypes.TEXT,
  images: DataTypes.ARRAY(DataTypes.STRING)
})
export default Fridge