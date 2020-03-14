var fs = require('fs');
var path= require('path');

fs.mkdir(path.join(__dirname,'/test'),{},err=>{

    if(err) throw err;
    console.log('folder created...');
});
