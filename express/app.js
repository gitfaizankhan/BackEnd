const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log("first Middleware Called");
    next();
});


app.use((req, res, next)=>{
    console.log("Second Middleware Called");
    res.send({ key1: 23 });
});

app.listen(3000);