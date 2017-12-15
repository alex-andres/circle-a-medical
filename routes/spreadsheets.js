var express = require("express");
var router = express.Router();
const uploads = require('../models/uploads');

var spreadsheets_controller = require("../controllers/spreadsheets_controller");

router.get("/", spreadsheets_controller.index);

router.get('/uploadedFiles', (req, res) => {
    uploads.uploadModel(res => {
        console.log(res);
    });
    // res.send(uploadModel.uploadedFiles());
    // let hbsObject = {
    //     allFiles: uploadModel.uploadedFiles()
    // };

    // res.render('spreadsheets', hbsObject);
});

module.exports = router;