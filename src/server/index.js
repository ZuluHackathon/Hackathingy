/* ⇠ ⇡ ⇢ ⇣ */
/* ۞ ꙰ べ */
require("dotenv").config();
//const twilio = require('twilio');

const express = require("express");
// eslint-disable-next-line import/order
const path = require("path");
//const { Router } = require("express");

const app = express();
const PORT = 9090;
const DIST_DIR = path.resolve(__dirname, "..", "..", "dist");

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_NUMBER;
// const userNumber1 = process.env.USER_NUMBER1;

const client = require("twilio")(accountSid, authToken);

// define a route to send an SMS message
app.post("/send-sms", (req, res) => {
  const { to } = req.body;

  client.messages
    .create({
      body: "Signed Up!",
      to: to,
      from: phoneNumber,
    })
    .then(() => {
      res.status(200).send("Signed Up!");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Oops! Something went wrong.");
    });
});

// const { BadgeRouter } = require("./routes/badges");
// const { FridgeRouter } = require("./routes/fridges");
// const { UserRouter } = require("./routes/users");


// const db = require("../db/index");

// const serveHome = (req, res) => {
//   res.sendFile(path.resolve(DIST_DIR, "index.html"), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// };

/*
  べべべべべべべべべべべ
  べべ middleware べべ
  べべべべべべべべべべべ
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));

/*
  べべべべべべべべべ
  べべ routers べべ
  べべべべべべべべべ
*/

/*
  べべべべべべべべべべべ
  べべ use routes べべ
  べべべべべべべべべべべ
*/

// app.use("/users", UserRouter);
// app.use("/fridges", FridgeRouter);
// app.use("/badges", BadgeRouter);

/*
  べべべべべべべべべべ
  べべ endpoints べべ
  べべべべべべべべべべ
*/

app.get("/", (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

module.exports = { app };
