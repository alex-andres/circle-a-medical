const multer = require('multer');
const moment = require('moment');

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

module.exports = upload;