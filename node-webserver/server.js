const express = require('express');

let app = express();
app.use(express.static(__dirname + '/public'))

 app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name:'Keenan',
        likes: [
            'skating',
            'coding'
        ]
    })
 });

 app.get('/about', (req,res) => {
    res.send('About Page'); 
 });

 app.get('/bad', (req, res) => {
     res.send({
         errorMessage: 'bad request'
     })
 })

 app.listen(3000, () => {
     console.log('server is running on port 3000');
 }); 