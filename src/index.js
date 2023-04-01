require ('dotenv').config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid =process.env.ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = require("twilio")(accountSid, authToken);
client.messages
  .create({ body: "Hello from Twilio", from: "+18554385133", to: "+15043763791" })
  .then(message => console.log(message.sid));