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

const { app } = require('../index/app');
const { Router } = require('express');

const BadgeRouter = Router();

/*
  べべべべべべべべべべ
  べべ db models べべ
  べべべべべべべべべべ
*/

const Badge = require('../../db/schemas/badge');
// import { Model } from 'sequelize'; // ⇠ for advanced queries (Op: ne, etc...)

/*
  べべべべべべべべべべ
  べべ endpoints べべ
  べべべべべべべべべべ
*/

// BadgeRouter.get('/users/...', (req, res) => {
//   /* ... */
// });

module.exports = {
  BadgeRouter
};
