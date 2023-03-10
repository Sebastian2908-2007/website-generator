const mongoose = require('mongoose');

// mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/webpage-builder').
catch(error => console.log(error));
// use this to  log mongo queries being executed
mongoose.set('debug',true);
module.exports = mongoose.connection;