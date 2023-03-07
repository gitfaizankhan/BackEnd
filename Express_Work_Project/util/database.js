// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'nodedata',
//     password:'root'
// });

// module.exports = pool.promise();


const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodedata', 'root', 'root', {dialect:'mysql', host:'localhost'});

module.exports = sequelize;

// go ==> routes/product