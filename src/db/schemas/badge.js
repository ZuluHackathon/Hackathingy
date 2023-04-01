import { DataTypes } from 'sequelize'; // import Model
import { db } from '../index';

const Badge = db.define('badge', {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_url: DataTypes.STRING
})
export default Badge