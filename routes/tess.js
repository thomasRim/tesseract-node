var express = require('express');
var router = express.Router();

var formidable = require('formidable');
var fs = require('fs');
var tess = require('node-tesseract');


router.get('/', function(req, res, next) {
    console.log('method ',req.method );
    res.send('use POST with @file param of an image form data');

});

router.post('/',function(req, res, next) {
    console.log('method ',req.method );

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var file = files.file;
        var oldpath = file.path;
        var newpath = file.name;


        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            tess.process(newpath,function(err, text) {
                if(err) {
                    res.status(500).send(err.message);
                } else {
                    res.status(200).send(text);
                }
            });
        });
    });

});

module.exports = router;