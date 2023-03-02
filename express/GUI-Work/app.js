const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./route/admin');
const shopRoute = require('./route/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);
app.use(shopRoute);

// 404 Page

app.use((req, res, next)=>{
    // res.send('<h1>Page Not Found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});



app.listen(5000);