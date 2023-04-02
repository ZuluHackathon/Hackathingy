const User = require('../schemas/user');

const userSeeder = async (userArr) => {
  for (let i = 0; i < userArr.length; i++) {
    await User.findOrCreate(
      {
        where: {
          email: userArr[i].email,
          name: userArr[i].name,
          phone: userArr[i].phone,
          badges: userArr[i].badges,
          fridges: userArr[i].fridges
        }
      })
      .then((success) =>
        console.log('User.findOrCreate successful!'))
      .catch((err) =>
        console.error('ERROR: User.findOrCreate failed!'));
  }
};

module.exports = userSeeder;