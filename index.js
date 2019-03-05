// Create Server

const express = require('express'); // import module express
const app = express(); //eksekusi module express

//eksekusi express dengan memanggil variabel app
app.get('/', function(request, respone){ // Simbol / yang berarti "root" atau halaman utama, function req(request) dan res(respone)
    respone.send("abcdefgh");   //mengirimkan respone dari http dan dikembalikan
})

app.listen('1010'); //definisi halaman port