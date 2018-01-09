const Server = require('./server.js')
const port = 3000
const express = require('express')
var app = express();
const router = Server.router

app.use('/', router);

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
