const fs = require('fs');
const XLSX = require('xlsx');
const upload = require('./uploader');
const product = require('../models/newProduct');
const dataProcessor = require('./dataProcessor');

// define the parsing function
const parseExcel = (req, res) => {

    let xlsxFile = req.file.path;

    // XLSX settings to read the input file
    const workbook = XLSX.readFile(xlsxFile);
    const sheet_name_list = workbook.SheetNames;

    sheet_name_list.forEach((y) => {
        const worksheet = workbook.Sheets[y];

        // XLSX package built-in feature to parse excel to json
        const jsonSheet = XLSX.utils.sheet_to_json(worksheet);

        // Prettify and Stringify the json and save as a new file
        fs.writeFileSync(`${xlsxFile}.json`, JSON.stringify(jsonSheet, undefined, 2));

        // Print the number of rows processed for testing purposes
        console.log(`Number of items: ${jsonSheet.length}`);

        // send the parsed file to cleaner		
        dataProcessor(jsonSheet, req, res);

        // TODO: this was only for testing
        // send the cleaned json to database
        // product(jsonSheet);
    });
};

const uploadExcel = (req, res) => {

    // calling the multer upload function to save the file and pass to the parser
    upload(req, res, err => {

        // error handling
        if (err) {
            return (res.json({ statusCode: req.fileValidationCode || '400(Bad Request)', message: req.fileValidationError || JSON.stringify(err, undefined, 2) }));
        };

        // send error if no file was selected
        if (!req.file) {
            return (res.json({ statusCode: '415(Unsupported Media Type)', message: 'No file passed' }));
        };

        parseExcel(req, res);
    });
};

module.exports = uploadExcel;