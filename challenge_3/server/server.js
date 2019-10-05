const express = require('express');
const path = require('path');
const controller = require('./controllers/controller.js')


const app = express()
const PORT = 8000


app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, ()=> console.log(`Checkout app listening on port ${PORT}!`))

