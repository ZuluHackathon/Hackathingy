module.exports = {
  presets: [
    "@babel/preset-env",
    // {
    //   "modules": true // ⇠ maybe remove ?
    // },
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
