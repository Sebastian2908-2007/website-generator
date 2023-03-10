const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./dbConnection');

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./routes'));


  
  //corsOptions.credentials = true;

db.once('open', () => {
app.listen(PORT, () => {
    console.log(`API server running on Port ${PORT}!!!`);
});
})
