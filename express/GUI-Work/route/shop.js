const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const route = express.Router();

route.get('/', (req, res, next)=>{
    // rese.send("<h1>Hello From Express</h1>");
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = route;