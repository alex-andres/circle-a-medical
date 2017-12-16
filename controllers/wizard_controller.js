const { processCategories, processAttributes } = require('./processFiles');
const moment = require('moment');

exports.index = function(req, res) {
    const fileName = req.params.filename;
    let hbsObject = {
        fileName,
        date: moment().format('MM-DD-YYYY hh:mm:ss Z')
    };

    let cbCat = res => {
        processCategories(fileName, cb).then(result => {
            hbsObject["categories"] = result;
        });
    };

    let cbAttr = res => {
        hbsObject["attributes"] = res;
    };
    processAttributes(fileName, cbAttr);
    res.render('wizard/wizard', hbsObject);
};