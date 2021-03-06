const express = require('express');
const app = express();
const path= require('path');
const publicDirPath = path.join(__dirname , '../../public')

app.use(express.static(publicDirPath));

// created views folder in react and refeering files from there
app.set('view engine', 'hbs');

//Note -- Files refering from views folder in root level
//views/index.hbs
//views/about.hbs

app.get('',(req,res)=>{

    res.render('index',{
        title: 'index page',
        name: 'Raghuvar'
    })
});

app.get('/about',(req,res)=>{

    res.render('about',{
        title: 'About page',
        details: `Hi i am Raghuvar having experience in Angular,React,Vuejs, 
            NodeJs, PHP , sqlserver, mongodb, javascript.`,
        template: 'handlebar'
    })
});


app.listen(3000,()=>{
    console.log('listen port 3000');
})


/* Step to test code of this file
1- command to run code - 
a) nodemon 6-express-webserver/c-hbs-dynamic-template/app.js

2- Test url- // refering file from views folder at root level //
a) http://localhost:3000/
b) http://localhost:3000/about

*/