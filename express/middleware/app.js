const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const adminRoute = require('./routes/admin')
const shopRoutes = require('./routes/shop');

app.use(adminRoute);
app.use(shopRoutes);


app.listen(3000);