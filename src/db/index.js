const env =require('dotenv/config');
const postgresql = require('postgresql');
const {Sequelize} = require('sequelize');
// BEGIN DATABASE SEED DATA IMPORTS //

// END DATABASE SEED DATA IMPORTS //

// *********************
// *** DB CONNECTION ***
// *********************

const { DB_USER, DATABASE_URL, DB, DBPW, DB_PORT } = process.env;
//uncomment second sequelize call for using external db
const db = new Sequelize(DB, DB_USER, DBPW, {
  host: DATABASE_URL,
  port: Number(DB_PORT),
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false
});

db.authenticate()
  .then(() => console.log(`Connected to database ${DB} @ ${DATABASE_URL}`))
  .catch((error) => console.error('Unable to connect to the database:', error));

  const User = require('./schemas/user');
  const Badge = require('./schemas/badge');
  const Fridge = require('./schemas/fridge');

  // *************************
  // *** Seeder Fn Imports ***
  // *************************

  const userSeeder = require('./seeders/userSeeder.js');
  const badgeSeeder = require('./seeders/badgeSeeder.js');
  const fridgeSeeder = require('./seeders/fridgeSeeder');

  // *******************
  // *** MODEL SYNCS ***
  // *******************

  const modelSync = async (dropTables = false) => {
    const options = {
      force: dropTables
    };
  await Badge.sync(options);
  await Fridge.sync(options);
  await User.sync(options);
  // ↑↑↑ Tables Synced ↑↑↑
  // ↓↓↓  Seed Tables  ↓↓↓
  await fridgeSeeder(fridgeSeed);
  await badgeSeeder(badgeSeed);
  await userSeeder(userSeed);
};

// <-- WILL DROP ALL TABLES -->
modelSync(true);

// <-- WON'T DROP TABLES -->
//modelSync();

module.exports = db;
