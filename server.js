const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;
require('./hbs/helpers');

hbs.registerPartials(__dirname + '/views/parciales');

app.use(express.static(__dirname + '/public'));
//Express hbs engine 
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Fernando',

    });
});

app.get('/about', (req, res) => {

    res.render('about', {

    });
});

//app.get('/data', (req, res) => {
//    res.send('Hola Data');
//})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});