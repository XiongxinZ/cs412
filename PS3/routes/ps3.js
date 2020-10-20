const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('ps3b',{'name' :'Jude'})
    })

    .post((req, res, next) => {
        res.render('ps3c',{'string': req.body.string, 'len': req.body.string.length})
    })

module.exports = router;