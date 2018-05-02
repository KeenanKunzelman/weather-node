const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

 app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'my title',
        welcome: 'welcome to my site',
        currentYear: new Date().getFullYear()

    })
 });

 app.get('/about', (req,res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
 });

 app.get('/bad', (req, res) => {
     res.send({
         errorMessage: 'bad request'
     })
 })

 app.listen(3000, () => {
     console.log('server is running on port 3000');
 }); 