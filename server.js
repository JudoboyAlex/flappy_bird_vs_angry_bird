const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users')

require('dotenv').config();

const app = express();

const db = process.env.mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }
);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});