const express = require('express');
const path= require('path');
const app = express();

const publicDirPath = path.join(__dirname , '../../public')

app.use(express.static(publicDirPath));

app.listen(3000,()=>{
    console.log('listening port 3000');
});

/* Step to test code of this file
1- command to run code - 
a) nodemon 6-express-webserver/b-static-assets/app.js

2- Test url- // refering file from public folder //
a) http://localhost:3000/index.html
b) http://localhost:3000/about.html

*/