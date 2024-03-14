const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


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

app.get('/dynasty',(req,res)=>{
    const connection = kapcsolat();
        connection.query("select * from players",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.listen(3000);