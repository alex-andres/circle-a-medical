const fs = require('fs');
const XLSX = require('xlsx');
const multer = require('multer');
const moment = require('moment');
const product = require('../models/newProduct');

// ----- multer setting start -----

// multer disk storage settings
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        let datetimestamp = moment().format('MMDDYY-HHmmss');
        cb(null, `${datetimestamp}-${file.originalname}`);
    }
});

// using multer fileFilter to reject unknonw extensions
const fileFilter = (req, file, cb) => {

    const extension = file.mimetype;

    if (extension !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {

        req.fileValidationCode = 400;
        req.fileValidationError = 'The uploaded file is not supported!';

        return cb(new Error('The uploaded file is not supported!'), false);
    } else
        cb(null, true);
};

// multer upload settings
const upload = multer({
    storage,
    fileFilter
}).single('excelFile');

// ----- multer setting end -----

// function to remove fields with empty strings as value
let jsonCleaner = data => {
    data.map(obj => {
        const objEnt = Object.entries(obj);
        objEnt.map(val => {
            if (val[1] === '' || val[1] === ' ') {
                delete obj[val[0]];
            };
        });
    });
};

// define the parsing function
let parseExcel = (xlsxFile, res) => {

    // XLSX settings to read the input file
    const workbook = XLSX.readFile(xlsxFile);
    const sheet_name_list = workbook.SheetNames;

    sheet_name_list.forEach((y) => {
        let worksheet = workbook.Sheets[y];

        // XLSX package built-in feature to parse excel to json
        let jsonSheet = XLSX.utils.sheet_to_json(worksheet);

        // Prettify and Stringify the json and save as a new file
        fs.writeFileSync(`${xlsxFile}.json`, JSON.stringify(jsonSheet, undefined, 2));

        // Print the number of rows processed for testing purposes
        console.log(`Number of items: ${jsonSheet.length}`);

        // send the parsed file to cleaner		
        jsonCleaner(jsonSheet);

        // send the cleaned json to database
        product(jsonSheet);

        // send the json as response
        res.status(200).json({ statusCode: '200(OK)', message: `Number of items: ${jsonSheet.length}` });

    });
};

let uploadExcel = (req, res) => {

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

        parseExcel(req.file.path, res);
    });
};

module.exports = uploadExcel;