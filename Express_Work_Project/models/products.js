const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'productData.json'
);

  
const getProductsFromFile = cb=>{
    fs.readFile(p, (err, fileData) => {
        if (err) {
            cb([]);
        }else{
            cb(JSON.parse(fileData));
        }
    });
}
module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save(){
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log("hello", err);
            });
        });
    }

    static fatchAll(cb){
        getProductsFromFile(cb);
    }
}