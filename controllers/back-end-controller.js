const express = require('express');
const router = express.Router();

router.get("/", function(){

    console.log("You have accessed the index page through back-end-controller.js!!!!!! You are great!");

});

module.exports = router;