const express = require('express')
const path = require('path');
const controller = require('./controllers/controller.js')

const PORT = 3000

const app = express()

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/',(req, res) => res.send('Server is up and running!'));


app.listen(PORT, () => console.log(`Tic Tac Toe app listening on PORT ${PORT}!`))