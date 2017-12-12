const router = require('express').Router();
const xlsxParser = require('./parser');

// router.get("/", function() {

//     console.log("You have accessed the index page through back-end-controller.js!!!!!! You are great!");

// });

router.post('/upload', (req, res) => {
    xlsxParser(req, res);
});

module.exports = router;