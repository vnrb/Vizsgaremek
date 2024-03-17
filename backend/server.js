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
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/dynastyall',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/dynastyqb',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty' AND `position` LIKE 'QB'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/dynastyrb',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty' AND `position` LIKE 'RB'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/dynastywr',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty' AND `position` LIKE 'WR'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/dynastyte',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty' AND `position` LIKE 'TE'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/redraft',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/redraftall',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/redraftqb',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft' AND `position` LIKE 'QB'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/redraftrb',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft' AND `position` LIKE 'RB'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/redraftwr',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft' AND `position` LIKE 'WR'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/redraftte',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft' AND `position` LIKE 'TE'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/rookie',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/rookieall',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/rookieqb',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R' AND `position` LIKE 'QB'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/rookierb',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R' AND `position` LIKE 'RB'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/rookietwr',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R' AND `position` LIKE 'WR'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/rookiete',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R' AND `position` LIKE 'TE'",(error, result, fields)=>{
        if(error)
            res.send({"error":"Hiba lépett fel a lekérés során."})
        else
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);    
            console.log(result);
    })

    connection.end();
});

app.get('/inj',(req,res)=>{
    const connection = kapcsolat();
        connection.query("SELECT * FROM `players` WHERE `status` LIKE 'IR' OR `status` LIKE 'D' OR `status` LIKE 'Q'",(error, result, fields)=>{
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