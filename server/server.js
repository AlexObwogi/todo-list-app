/*file for simple server code*/
// Import required modules
 // Import required modules
const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const bodyParser = require('body-parser');
require('dotenv').config();

// Create an express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like your HTML/CSS/JS

// Sample route for testing
app.get(
/, (req, res) => {
    res.send(Welcome
to
the
To-Do
List
App
backend!);
});

// Start the server
app.listen(port, () => {
    console.log(Server is running on port );
});

// Import required modules
const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const bodyParser = require('body-parser');
require('dotenv').config();

// Create an express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like your HTML/CSS/JS

// Sample route for testing
app.get(
/, (req, res) => {
    res.send(Welcome
to
the
To-Do
List
App
backend!);
});

// Start the server
app.listen(port, () => {
    console.log(Server is running on port );
});

