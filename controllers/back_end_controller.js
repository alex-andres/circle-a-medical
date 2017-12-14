const xlsxParser = require('./parser');


exports.index = (req, res) => {
    xlsxParser(req, res);
});
