const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/databaseFunc');
const app = express();

const mainRouter = require('./routers/mainRouter');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/user', mainRouter);
// app.use((req, res, next)=>{
//     console.log("hello");
//     res.send("Good to go");
// })

sequelize.sync().then().catch(err=>{
    console.log(err);
})
app.listen(4000);
