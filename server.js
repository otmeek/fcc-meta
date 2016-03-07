'use strict';

var express = require('express');
var path    = require('path');
var multer  = require('multer')
var upload  = multer({ dest: 'uploads/' })

var app = express();
require('dotenv').load();

app.use(express.static(path.join(__dirname, 'main')));

app.post('/upload', upload.single('upl'), function (req, res, next) {
  res.json({
    size: req.file.size
  });
})

var port = process.env.PORT || 8080;
app.listen(port,  function () {
    console.log('Node.js listening on port ' + port + '...');
});