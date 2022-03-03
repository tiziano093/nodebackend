/* 
Express.js is a free and open-source web application framework for Node.js. 
It is used for designing and building web applications quickly and easily.
Install express localy in the project with "npm install express" and import it with the line below
*/
const express = require("express");
const mongoose = require("mongoose");

// envirorment variable inside .env file
require("dotenv").config();

// const is use for costant variable
const User = require("./model/user")

/* Creates an Express application. The express() function is a top-level function exported by the express module. */
const app = express();

const customMiddleware = (req, res, next) => { /* it can be use to do some custom operation before use the API */
    connection().catch(err => console.log(err));
    next();
};

const user = require('./routes/user.route')

/* This line allow us to accept Json format in our application */
app.use(express.json());
app.use(customMiddleware);

app.use('/user', user);

async function connection(){
    mongoose.connect(process.env.DB_CONNECTION_STRING, {useUnifiedTopology: true, useNewUrlParser: true}, (req, res) => {
    console.log("connected");
    });
};

/* App port and first operations */
app.listen(3000, () => {
    console.log("listening to 3000");
});