const xlsxParser = require('./parser');
const uploadModel = require('../models/uploads');


exports.index = (req, res) => {
    xlsxParser(req, res);
};

exports.deleteFile = (req, res) => {
    const fileName = req.params.filename;
    console.log(fileName);
    uploadModel.deleteFile(fileName).exec((err, result) => {
        if (err) return console.log(err);
        res.json(result);
    });
};