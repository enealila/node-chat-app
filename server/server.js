const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT ||3000;
var app = express();
app.listen(port,()=>{
    console.log(`Server is on port ${port}`);
});