const fs = require('fs');
const mongoose = require('mongoose');
const { uploadModel } = require('../models/uploads');
const catModel = require('../models/categories');
const attrModel = require('../models/attributes');

let processCategories = (fileName) => new Promise((resolve, reject) => {
    uploadModel.findOne({ fileName }, 'categories', (error, result) => {
        if (error) return console.log(error);
        if (result.categories !== []) {
            let catNumber = result.categories;
            result.categories.map((category) => {
                let categoryData = {};
                if (/\|/.test(category)) {
                    let splittedCat = category.split('|');
                    categoryData = {
                        name: splittedCat[splittedCat.length - 1],
                        parent: splittedCat[splittedCat.length - 2],
                        path: '|' + category
                    };
                } else {
                    categoryData = {
                        name: category,
                        parent: '|',
                        path: '|' + category
                    };
                };
                catModel.create(categoryData, (err, res) => {
                    if (err) return console.log(err);
                });
            });
        };
    });
    resolve(catNumber);
});

let processAttributes = (fileName, cb) => {
    uploadModel.findOne({ fileName }, 'attributes', (error, result) => {
        if (error) return console.log(error);
        if (result.attributes !== []) {
            cb(result.attributes);
        };
    });
};


module.exports = {
    processAttributes,
    processCategories
};