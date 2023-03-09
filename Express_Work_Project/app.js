const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const Product = require('./models/product');
const User = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next)=>{
    User.findByPk(1)
    .then(user=>{
        req.user = user;
        next();
    }).catch(error=>{
        console.log(error);
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// Product.hasMany(User, {constraints:true, onDelete: 'CASCADE'});

User.hasMany(Product);
Product.belongsTo(User);

// {force:true}
sequelize.sync()
.then(result=>{
    return User.findByPk(1);
})
.then(user=>{
    if(!user){
        console.log("hello")
        return User.create({id: 1, name:'faizan', email:'test@test.com'});
    }
    return user;
}).then(user=>{
    // console.log(user);
}).catch(err=>{
    console.log(err);
});
app.listen(3000);
