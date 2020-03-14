var fs =  require('fs');

/*
syntax - readFile('filename','encoding',callback);
*/

fs.readFile('readMe.txt','utf8',function(err,data){
 console.log(data);
});
console.log('reading file');


fs.readFile('readMe.txt','utf8', function(err,data2){
    console.log(data2);
   
});
   
console.log('writing file');
