const Fridge  = require('../schemas/fridge');

const fridgeSeeder = async (fridgeArr) => {
  for (let i = 0; i < fridgeArr.length; i++) {
    await Fridge.findOrCreate(
      {
        where: {
          name: fridgeArr[i].name,
          address: fridgeArr[i].address,
          status: fridgeArr[i].status,
          inventory: fridgeArr[i].inventory
        }
      })
      .then((success) =>
        console.log('User.findOrCreate successful!'))
      .catch((err) =>
        console.error('ERROR: User.findOrCreate failed!'));
  }
};

module.exports = fridgeSeeder;
