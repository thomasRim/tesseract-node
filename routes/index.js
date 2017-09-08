var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express' ,
        name: 'tesseract testing',
        description:'For testing call '+req.headers.host+'/tesseract and send file as form part data'
    });
})

module.exports = router;
