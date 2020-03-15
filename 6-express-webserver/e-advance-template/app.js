
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const publicDirPath = path.join(__dirname,'../../public');
const viewsDirPath = path.join(__dirname,'/templates/views');
const partialsDirPath = path.join(__dirname,'/templates/partials');

app.set('view engine', 'hbs'); // set view engine to habndlebars
app.set('views', viewsDirPath); // set views directory path
hbs.registerPartials(partialsDirPath);// register partials path to handlebars


// setup static directory to serve
app.use(express.static(publicDirPath));

app.get('/index',(req,res)=>{
    res.render('index',{
       title:'Home page',
       name: 'Raghuvar Visht'
    });
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About page',
        name: 'Raghuvar Visht'
    });
});

app.get('/help',(req,res)=>{
    res.render('help',{
       title:'Help page',
       name: 'Raghuvar Visht'        
    });
});

app.get('/contact',(req,res)=>{
    res.render('contact',{
       title:'Contact us page ',
       name: 'Raghuvar Visht'        
    });
});

app.listen(3000,()=>{
    console.log('port listen at 3000');
})


/* Step to test code of this file

1- command to run code - 
a) nodemon 6-express-webserver/e-advance-template/app.js -e js,hbs  

2- Test url- // refering file from templets folder inside e-advance-template folder

a) http://localhost:3000/index
b) http://localhost:3000/about
c) http://localhost:3000/help
c) http://localhost:3000/contact

*/