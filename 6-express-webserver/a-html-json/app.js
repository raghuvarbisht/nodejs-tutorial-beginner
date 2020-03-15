const express =  require('express');
const app =  express();

app.get('/',(req,res)=>{
    res.send(`<h1>HTML content deliver</h1>`);    
})

// returning html as response
app.get('/htmlcontent',(req,res)=>{
    res.send(`<h1>Node developer</h1>
              <p>This is html content as response</p>  
    `);    
});

// returning json as response
app.get('/jsoncontent',(req,res)=>{
    res.send({name:'Raghuvar',age:'30'});    
})


// port where app is running 
app.listen(3000,(req,res)=>{
    console.log('listing on port 3000');
});

/* Step to test code of this file
1- command to run code - 
a) nodemon 6-express-webserver/html-json/app.js

2- Test url-
a) http://localhost:3000/
b) http://localhost:3000/htmlcontent
c) http://localhost:3000/jsoncontent

*/