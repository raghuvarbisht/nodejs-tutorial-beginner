const express = require('express');
const app = express();
const path = require('path');
const hbs= require('hbs');

const publicDirPath = path.join(__dirname,'../../public');
const viewsDirPath = path.join(__dirname,'/templates/views');
const partialsDirPath = path.join(__dirname,'/templates/partials');

app.set('view engine', 'hbs'); // set view engine to habndlebars
app.set('viwes', viewsDirPath); // set views directory path
hbs.registerPartials(partialsDirPath);// register partials path to handlebars


// setup static directory to serve
app.use(express.static(publicDirPath));

app.get('/index',(req,res)=>{
    res.render('index',{
       title:'Home page custom',
       name: 'Raghuvar Visht'

    });

});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About page custom',
        name: 'Raghuvar Visht'
    });
})

app.get('/help',(req,res)=>{
    res.render('help',{
       title:'help page custom',
       name: 'Raghuvar Visht'        
    });
})

app.listen(4000,()=>{
    console.log('port listen at 4000');
})