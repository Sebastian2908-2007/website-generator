const mongoose = require('mongoose');

// mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:3001/webpage-builder');
// use this to  log mongo queries being executed
mongoose.set('debug',true);