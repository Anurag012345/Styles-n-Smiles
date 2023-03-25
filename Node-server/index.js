const { request } = require('express');
const express = require('express');

const server = express();

server.get('/demo', (req, res) => {
    res.send("Hello");
})

server.listen(8080, () => {
    console.log('server Started')
})