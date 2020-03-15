const express = require('express');
const app = express();
const path= require('path');
const publicDirPath = path.join(__dirname , '../../public')
const templatePath = path.join(__dirname , '/templates');

//console.log('templatePath=='+templatePath);
app.use(express.static(publicDirPath));

// created views folder in react and refeering files from there
app.set('view engine', 'hbs');
// customizing "views" folder path to templates folder inside "d-custom-hbs-dynamic-template"
app.set('views', templatePath);

//Note -- Files refering from views folder in root level
// view/index.hbs
//views/about.hbs

app.get('/index',(req,res)=>{

    res.render('index',{
        title: 'index page',
        name: 'Raghuvar Singh'
    })
});
app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About page',
        details: `I am Raghuvar.`,
        name: 'Raghuvar Singh'
    })
});

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help page',
        details: `please google for help on handlebar tutorial`,
        name: 'Raghuvar Singh'
    })
});


app.listen(3000,()=>{
    console.log('listen port 3000');
});


/* Step to test code of this file

1- command to run code - 
a) nodemon 6-express-webserver/d-custom-hbs-dynamic-template/app.js

2- Test url- // refering file from templets folder inside d-custom-hbs-dynamic-template folder
a) http://localhost:3000/index
b) http://localhost:3000/about
c) http://localhost:3000/help

*/