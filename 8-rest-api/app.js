//run command in command prompt: node 6-rest-api/app.js  
//browser
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('home page rest api');
});

app.get('/about',(req,res)=>{
    res.send('about page rest api');
});

app.listen(3000,()=>{
    console.log('listing port 3000');
});