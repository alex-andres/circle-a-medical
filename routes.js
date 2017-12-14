module.exports = function(app){
    
            // Our model controllers (rather than routes)
            var application = require('./routes/back_end');
            var login = require('./routes/user');
            var inventory_results = require('./routes/inventory_search_results');
            var inventory = require('./routes/inventory');
            var settings = require('./routes/settings');
            var spreadsheet = require('./routes/spreadsheet');
            var wizard = require('./routes/wizard');
    
            app.use('/', application);
            app.use('/login', login);
            app.use('/inventory_results', inventory_results);
            app.use('/inventory', inventory);
            app.use('/settings', settings);
            app.use('/spreadsheet', spreadsheet);
            app.use('/wizard', wizard);
    }