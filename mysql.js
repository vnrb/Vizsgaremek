const express = require('express');
const app = express();
const bodyParser =require('body-parser');

const mysql = require('mysql');

const kapcsolat = ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'hotpodtato'

    });
};

app.get('/cars',(req,res)=>{
    const connection = kapcsolat();
        connection.query("select * from car",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.send(result);
    })
    
    connection.end();
});

app.get('/cars/:id', (req,res)=> {
    //.../cars/1
    //req.params.id
    const connection = kapcsolat();
    connection.connect();
    connection.query("select name from car where id ="+req.params.id,(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.send(result);
    });

    connection.end();

});

app.post('/cars', bodyParser.json() ,(req,res)=>{
    const ujAuto ={
       nev: req.body.name,
       ln: req.body.licenceNumber,
       hr: req.body.hourlyRate
   }
    const connection = kapcsolat();
    connection.connect();
    connection.query("insert into car (name, licenceNumber,hourlyRate) values (?,?,?);",[ujAuto.nev,ujAuto.ln,ujAuto.hr],(error, result, fields)=>{
        if(error)
            res.send({"error": "Hiba a feltötésnél"})
        else
            res.send(ujAuto);
    });

    connection.end();
});

/*app.get('/trips',(req,res)=>{
    const connection = kapcsolat();
        connection.query("select * from trip",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.send(result);
    }) 
});*/

app.listen(3000);