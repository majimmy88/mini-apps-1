const express = require('express');
const path = require('path');
const controller = require('./controllers/controller.js')
const bodyParser = require('body-parser');


const app = express()
const PORT = 8000

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/checkoutInfo', (req, res)=> {
    console.log(req.body)
    controller.addInfo(req, res)
});

app.listen(PORT, ()=> console.log(`Checkout app listening on port ${PORT}!`))

