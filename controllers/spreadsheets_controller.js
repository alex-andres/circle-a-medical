const uploads = require('../models/uploads');

exports.index = function(req, res) {
    uploads.uploadedFiles.exec((err, files) => {
        if (err) {
            return console.log(err)
        };
        let hbsObject = {
            files
        };
        res.render('spreadsheets/spreadsheets', hbsObject);
    });
};