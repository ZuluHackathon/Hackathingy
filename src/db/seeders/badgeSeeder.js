const BadgeSeeder = async (badgeArr) => {
  for (let i = 0; i < badgeArr.length; i++) {
    await User.findOrCreate({
      where: {
        name: badgeArr[i].name,
        description: badgeArr[i].description,
        image_url: badgeArr[i].image_url,
      },
    })
      .then((success) => console.log("User.findOrCreate successful!"))
      .catch((err) => console.error("ERROR: User.findOrCreate failed!"));
  }
};

module.exports = BadgeSeeder;
