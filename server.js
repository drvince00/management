const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5001;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

app.get('/api/hello', (req, res) => {
  res.send({
    message: 'Hello Express!'
  });
});

app.get('/api/customers', (req, res) => {
  connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, fields) => {
        res.send(rows);
        console.log(rows);
    }
  );
  // console.log(res.contentType);
  // res.setHeader('Content-Type', 'application/json');
  // res.send();
})

app.listen(port, () => console.log(`Listening on port ${port}`));
