const express = require ('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Home');    
});

app.get('/products', (req, res) => {
    res.send('Productos ');    
});

app.get('/contact', (req, res) => {
    res.send('Contáctanos');    
});

app.listen(port, () => {
    console.log('server listening on http://localhost:${port}');
});    