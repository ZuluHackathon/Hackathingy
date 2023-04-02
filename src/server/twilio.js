// require("dotenv").config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Read more at http://twil.io/secure

// Set environment variables for your credentials
// const accountSid = process.env.ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const phoneNumber = process.env.TWILIO_NUMBER;
// const userNumber1 = process.env.USER_NUMBER1;

// const client = require("twilio")(accountSid, authToken);
// app.post('/send-sms', (req, res) => {
//   const { to, message } = req.body;

//   client.messages.create({
//     body: message,
//     to: to,
//     from: 'your_twilio_phone_number'
//   })
//     .then(() => {
//       res.status(200).send('SMS message sent!');
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send('Oops! Something went wrong.');
//     });
// });

// client.messages
//   .create({
//     body: "Hello from Twilio",
//     from: phoneNumber,
//     to: process.env.USER_NUMBER1,
//   })
//   .then((message) => console.log(message.sid));
