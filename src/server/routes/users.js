/* ⇠ ⇡ ⇢ ⇣ */
/* ۞ ꙰ べ */

/*
  べべべべべべべべべ
  べべ utility べべ
  べべべべべべべべべ
*/

// require('dotenv/config');
// const passport = require('passport');

/*

  べべべべべべべべべべべべ
  べべ router/server べべ
  べべべべべべべべべべべべ
*/

//const { app } = require('../index');
const { Router } = require("express");

const UserRouter = Router();

/*
  べべべべべべべべべべ
  べべ db models べべ
  べべべべべべべべべべ
*/

// import { Model } from 'sequelize'; // ⇠ for advanced queries (Op: ne, etc...)

/*
  べべべべべべべべべべ
  べべ endpoints べべ
  べべべべべべべべべべ
*/

// UserRouter.get('/users/...', (req, res) => {
//   /* ... */
// });

module.exports = {
  UserRouter,
};
