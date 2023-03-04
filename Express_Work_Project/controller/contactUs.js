exports.contactUs = (req, res, next) => {
    res.render('contactus', {
        pageTitle: 'Contact Us',
        path: '/contact/contact',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
    // res.send("Hello");
};