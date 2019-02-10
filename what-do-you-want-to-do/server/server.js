const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');


const app = express();

app.use(bodyParser.json());

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})


app.listen(SERVER_PORT, () => {
    console.log(`The server is poppin' off on port ${SERVER_PORT}`)
})

