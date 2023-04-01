import { DataTypes } from 'sequelize'; // import Model
import { db } from '../index';

const User = db.define('user', {
  name: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  badges: DataTypes.ARRAY(DataTypes.INTEGER),
  fridges: DataTypes.ARRAY(DataTypes.INTEGER),
})
export default User