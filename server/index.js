require("dotenv").config()

const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Replace 'ejs' with the name of your chosen template engine

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});