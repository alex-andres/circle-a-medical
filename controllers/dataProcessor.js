const uploadToDB = require('../models/uploads');
const moment = require('moment');

// TODO: Make this a separate module
// function to remove fields with empty strings as value
const dataProcessor = (data, req, res) => {

    const fileName = req.file.filename;
    const xlsxPath = req.file.path;
    const jsonPath = `${xlsxPath}.json`;
    const recordsCount = data.length;
    const creationTime = moment().format('MM-DD-YYYY hh:mm:ss Z');
    let arrCategories = [];
    let arrUnits = [];
    let arrAttributes = [];

    data.map(obj => {
        const objEnt = Object.entries(obj);
        objEnt.map(val => {
            val[1] = val[1].trim();
            if (val[1] === '' || val[1] === ' ') {
                delete obj[val[0]];
            } else
            if (val[0] === 'CategoryPathName' || /^([^|]*)(\|).*$/.test(val[1])) {
                val[1] = val[1].split('|');
                val[1].map((str, i) => {
                    str = str.trim();
                    val[1][i] = str;
                });
                val[1] = val[1].join('|');
                if (arrCategories.indexOf(val[1]) === -1) {
                    arrCategories.push(val[1]);
                };
            } else
            if (/[A-Z]{2}\/\d*/.test(val[0])) {
                if (arrUnits.indexOf(val[0]) === -1) {
                    arrUnits.push(val[0]);
                };
            } else {
                if (arrAttributes.indexOf(val[0]) === -1) {
                    arrAttributes.push(val[0]);
                };
            };
        });
    });

    const objDB = {
        fileName,
        xlsxPath,
        jsonPath,
        recordsCount,
        creationTime,
        categories: arrCategories,
        units: arrUnits,
        attributes: arrAttributes,
        isProcessed: false
    };

    let cb = (error) => {
        if (error) return console.log(err);
        // send the json as response
        res.status(200).json({ statusCode: '200(OK)', message: `Number of items: ${data.length}` });
    };

    uploadToDB.uploadsDB(objDB, cb);
    // send the json as response
    // res.status(200).json({ statusCode: '200(OK)', message: `Number of items: ${jsonSheet.length}` });
};

module.exports = dataProcessor;