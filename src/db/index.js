/* eslint-disable no-unused-vars */
const env = require("dotenv/config");
const postgresql = require("postgresql");
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize"); // import Model

// BEGIN DATABASE SEED DATA IMPORTS //
const badgeSeed = require("./seeds/badgeSeed");
const fridgeSeed = require("./seeds/fridgeSeed");
const userSeed = require("./seeds/userSeed");
// END DATABASE SEED DATA IMPORTS //

// *********************
// *** DB CONNECTION ***
// *********************

const { DB_USER, DATABASE_URL, DB, DBPW, DB_PORT } = process.env;

//uncomment second sequelize call for using external db
const db = new Sequelize(DB, DB_USER, DBPW, {
  host: DATABASE_URL,
  port: Number(DB_PORT),
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
});

db.authenticate()
  .then(() => console.log(`Connected to database ${DB} @ ${DATABASE_URL}`))
  .catch((error) => console.error("Unable to connect to the database:", error));

// const User = require('./schemas/user');
const User = db.define("user", {
  email: DataTypes.STRING,
  name: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  badges: DataTypes.ARRAY(DataTypes.INTEGER),
  fridges: DataTypes.ARRAY(DataTypes.INTEGER),
});

// const Badge = require('./schemas/badge');
const Badge = db.define("badge", {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_url: DataTypes.STRING,
});

// const Fridge = require('./schemas/fridge');
const Fridge = db.define("fridge", {
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  status: DataTypes.STRING,
  inventory: DataTypes.ARRAY(DataTypes.STRING),
});

const userSeeder = async (userArr) => {
  for (let i = 0; i < userArr.length; i++) {
    await User.findOrCreate({
      where: {
        email: userArr[i].email,
        name: userArr[i].name,
        phone: userArr[i].phone,
        badges: userArr[i].badges,
        fridges: userArr[i].fridges,
      },
    })
      .then((success) => console.log("User.findOrCreate successful!"))
      .catch((err) => console.error("ERROR: User.findOrCreate failed!"));
  }
};

const fridgeSeeder = async (fridgeArr) => {
  for (let i = 0; i < fridgeArr.length; i++) {
    await Fridge.findOrCreate({
      where: {
        name: fridgeArr[i].name,
        address: fridgeArr[i].address,
        status: fridgeArr[i].status,
        inventory: fridgeArr[i].inventory,
      },
    })
      .then((success) => console.log("Fridge.findOrCreate successful!"))
      .catch((err) => console.error("ERROR: Fridge.findOrCreate failed!"));
  }
};

const badgeSeeder = async (badgeArr) => {
  for (let i = 0; i < badgeArr.length; i++) {
    await Badge.findOrCreate({
      where: {
        name: badgeArr[i].name,
        description: badgeArr[i].description,
        image_url: badgeArr[i].image_url,
      },
    })
      .then((success) => console.log("Badge.findOrCreate successful!"))
      .catch((err) => console.error("ERROR: Badge.findOrCreate failed!"));
  }
};

// *******************
// *** MODEL SYNCS ***
// *******************

const modelSync = async (dropTables = false) => {
  const options = {
    force: dropTables,
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

module.exports = { db, User, Fridge, Badge };
