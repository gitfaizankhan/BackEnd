const express = require('express');
const router = express.Router();
const contactUsController = require('../controller/contactUs')

router.get('/contact', contactUsController.contactUs);

router.post('/contact/success', (req, res, next) => {
    res.redirect('/admin/add-product');
})

module.exports = router;