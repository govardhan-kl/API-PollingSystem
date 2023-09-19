const express = require('express');
const port = 9999;
const app = express();
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true }));

app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if (err){
        console.log(`Error : ${err}`); // to embed variable inside  a string, we use bactick character. this is called interpolation
    }
    console.log(`Server is running on port : ${port}`);
})