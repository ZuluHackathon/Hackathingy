require ('dotenv').config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Read more at http://twil.io/secure

// Set environment variables for your credentials
const accountSid =process.env.ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_NUMBER;


const client = require("twilio")(accountSid, authToken);
client.messages
  .create({ body: "Hello from Twilio", from: phoneNumber, to: process.env.USER_NUMBER1 })
  .then(message => console.log(message.sid));