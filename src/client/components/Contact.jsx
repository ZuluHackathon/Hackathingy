import React from 'react';
import Index from '../Index';
import { useState } from 'react-dom';
import axios from 'axios';

// Route in server/index.js that needs to be hit
// app.post('/send-sms', (req, res) => {
//   const { to, message } = req.body;

function Contact() {
  const [to, setTo] = useState('');

  const handleSignUp = () => {
    axios
      .post("/send-sms", {
        to: to,
      })
      .then((response) => {
        console.log(response.data);
        alert("Si");
    })
    .catch((err) => {
      console.error(err);
      alert('Oops! Something went wrong.');
    });
  }

  return (
    <div>
      <label>
        Phone number:
        <input type="text" value={to} onChange={(event) => setTo(event.target.value)} />
      </label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}


export default Contact;