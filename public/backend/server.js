const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

// SERVER KÉRÉSEK

app.get('/', (req, res) =>{
    fs.readFile("../frontend/html/index.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/dynasty', (req, res) =>{
    fs.readFile("../frontend/html/dynasty ranking.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/redraft', (req, res) =>{
    fs.readFile("../frontend/html/redraft ranking.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/rookies', (req, res) =>{
    fs.readFile("../frontend/html/rookie ranking.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/injuries', (req, res) =>{
    fs.readFile("../frontend/html/injuries.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/blog', (req, res) =>{
    fs.readFile("../frontend/html/blog.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/fantasyligak', (req, res) =>{
    fs.readFile("../frontend/html/fantasyligak.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/hirek', (req, res) =>{
    fs.readFile("../frontend/html/hirek.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/admin', (req, res) =>{
    fs.readFile("../frontend/html/admin.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/tippjatek', (req, res) =>{
    fs.readFile("../frontend/html/tippjatek.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});


// ADATBÁZIS LEKÉRDEZÉS 

const mysql = require('mysql');

const kapcsolat = ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'hotpodtato'

    });
};

app.get('/x',(req,res)=>{
    const connection = kapcsolat();
        connection.query("select * from players",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.send(result);
            console.log(result);
    })
    
    connection.end();
});


app.listen(3000);