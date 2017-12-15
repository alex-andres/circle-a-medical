module.exports = function(app){
    
            // Our model controllers (rather than routes)
            var application = require('./routes/back_end');
            var login = require('./routes/user');
            var inventory_results = require('./routes/inventory_search_results');
            var inventory = require('./routes/inventory');
            var settings = require('./routes/settings');
            var spreadsheets = require('./routes/spreadsheets');
            var wizard = require('./routes/wizard');
    
            app.use('/', login);
            app.use('/login', login);
            app.use('/inventory_results', inventory_results);
            app.use('/inventory', inventory);
            app.use('/settings', settings);
            app.use('/spreadsheets', spreadsheets);
            app.use('/wizard', wizard);
    }