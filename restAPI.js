//import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

//method get
app.get('/coba', (request, response)=>{
    response.end("ini get XI RPl 2");
});

//method post
app.post('/coba', (request, response)=>{
    response.end("ini post XI RPL 2");
});

//inisialisai port
app.listen('12345', (e)=>{
    console.log(e);
});