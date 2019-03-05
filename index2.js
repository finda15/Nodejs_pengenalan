const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

app.get('/siswa/:nama', (request, response)=>{
    let namaSiswa = request.params.nama;
    response.end("menampilkan nama siswa "+ namaSiswa);
});

app.post('/siswa', (request, response)=>{
    let namaSiswa = request.body.name;
    let alamat = request.body.adress;
    response.end('menampilkan siswa baru '+ namaSiswa + ', yang beralamat di '+ alamat);
});

app.delete('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.name;
    response.end('id ' + id + ' telah dihapus, dengan nama: '+namaSiswa);
});

app.put('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.name;
    let alamat = request.body.adress;
    response.end('siswa dengan id: '+id+' telah diupdate')
});

app.listen('8080', (e)=>{
    console.log(e)
});