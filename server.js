const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.get('/', (req, res) =>{
    fs.readFile("./index.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/ranking1.html', (req, res) =>{
    fs.readFile("./ranking1.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/ranking2.html', (req, res) =>{
    fs.readFile("./ranking2.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/ranking3.html', (req, res) =>{
    fs.readFile("./ranking3.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/ranking4.html', (req, res) =>{
    fs.readFile("./ranking4.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/blog.html', (req, res) =>{
    fs.readFile("./blog.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/fantasyligak.html', (req, res) =>{
    fs.readFile("./fantasyligak.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/hirek.html', (req, res) =>{
    fs.readFile("./hirek.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/admin.html', (req, res) =>{
    fs.readFile("./admin.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.get('/index.html', (req, res) =>{
    fs.readFile("./index.html", (err, file)=>{
        res.setHeader('access-control-allow-origin','*');
        res.setHeader('Content-type', 'text/html');
        res.status(200);
        res.end(file);
    });
});

app.listen(8080);