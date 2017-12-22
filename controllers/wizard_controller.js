const { processCategories, processAttributes } = require('./processFiles');
const moment = require('moment');

exports.index = function(req, res) {
    const fileName = req.params.filename;
    let dateStr = moment().format('MM-DD-YYYY hh:mm:ss Z')

    // let cbCat = res => {
    //     processCategories(fileName, cb).then(result => {
    //         hbsObject["categories"] = result;
    //     });
    // };

    let cbAttr = res => {
        var arrAttr = [];
        res.map((val, i) => {
            let obj = {
                attr: val,
                fileName,
                dateStr
            };
            arrAttr.push(obj);
        });

        hbsObject = {
            attributes: arrAttr
        };
    };
    processAttributes(fileName, cbAttr);
    res.render('wizard/wizard', hbsObject);
};