var fs = require('fs');// require fs module to work on file system
/* 
readFileSync - this method read files synchronously
*/
var readme = fs.readFileSync('data.txt','utf8'); 
console.log(readme);

/* 
writeFileSync - this method write files synchronously
*/
fs.writeFileSync('newdata.txt',readme); //

var newFileContent =  readme + 'My name is raghuvar.';
/*
 Creating new file after appending text in file content.  
*/
fs.writeFileSync('appenddata.txt',newFileContent); 