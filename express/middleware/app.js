const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const adminRoute = require('./routes/admin')
const shopRoutes = require('./routes/shop');
// filtering path
app.use('/admin', adminRoute);
app.use(shopRoutes);


app.use((req, res, next)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);