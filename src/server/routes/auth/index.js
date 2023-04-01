/* ⇣ Require the necessary modules in your Node.js application: ⇣ */

// const bcrypt = require('bcrypt');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const { app } = require('../../index.js');

/* ⇣ Set up a local authentication strategy using Passport and bcrypt: ⇣ */

// passport.use(new LocalStrategy({
//   usernameField: 'email', // the email field in the login form
//   passwordField: 'password', // the password field in the login form
// }, async (email, password, done) => {
//   try {
//     // Find the user with the provided email
//     const user = await User.findOne({ email });

//     // If user not found, return false
//     if (!user) {
//       return done(null, false, { message: 'Incorrect email or password.' });
//     }

//     // Check if the provided password matches the stored password
//     const isMatch = await bcrypt.compare(password, user.password);

//     // If password doesn't match, return false
//     if (!isMatch) {
//       return done(null, false, { message: 'Incorrect email or password.' });
//     }

//     // If user and password match, return the user object
//     return done(null, user);
//   } catch (error) {
//     done(error);
//   }
// }));

/* ⇣ Configure Passport to serialize and deserialize user objects: ⇣ */

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error);
//   }
// });

/* ⇣ Initialize Passport and use the local authentication strategy ⇣ */

// app.use(passport.initialize());
// app.use(passport.session());

// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/dashboard',
//   failureRedirect: '/login',
// }));
