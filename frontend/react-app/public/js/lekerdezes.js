// ADATBÁZIS LEKÉRDEZÉS:

const mysql = require('mysql');

const kapcsolat = ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'hotpodtato'
    });
};

const connection = kapcsolat();
    connection.query("select * from players",(error, result, fields)=>{
    if(error)
        res.send({"error":"Hiba lépett fel a lekérés során."})
    else
        //res.send(result);
        console.log(result);
})

connection.end();