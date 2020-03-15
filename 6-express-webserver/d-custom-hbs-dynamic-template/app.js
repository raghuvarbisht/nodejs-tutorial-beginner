const express = require('express');
const app = express();
const path= require('path');
const publicDirPath = path.join(__dirname , '../../public')
const templatePath = path.join(__dirname , '/templates');

//console.log('templatePath=='+templatePath);
app.use(express.static(publicDirPath));

// created views folder in react and refeering files from there
app.set('view engine', 'hbs');
// customizing "views" folder path for templates
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
})