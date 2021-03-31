const express = require('express')
const router = express.Router();
const fs = require('fs')


//Get pdf

router.get('/', (req, res) => {
    let pdf = __dirname + '/resume.pdf';

    res.download(pdf)
})


module.exports = router;