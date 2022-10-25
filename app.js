const express = require('express');

const app = express();

app.get('/', fucntion(req,res){
    res.send('<h1>HELO</h1>');
});

app.get('/restaurants',function(req,res) {
    
});

app.listen(3000);