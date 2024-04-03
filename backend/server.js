const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

// ADATBÁZIS LEKÉRDEZÉS 

const mysql = require('mysql');

const kapcsolat = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'hotpodtato'
    });
};

app.get('/dynasty', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/dynastyall', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/dynastyqb', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty' AND `position` LIKE 'QB'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/dynastyrb', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty' AND `position` LIKE 'RB'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/dynastywr', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty' AND `position` LIKE 'WR'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/dynastyte', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Dynasty' AND `position` LIKE 'TE'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/redraft', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/redraftall', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/redraftqb', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft' AND `position` LIKE 'QB'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/redraftrb', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft' AND `position` LIKE 'RB'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/redraftwr', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft' AND `position` LIKE 'WR'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/redraftte', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `leaguetype` LIKE 'Redraft' AND `position` LIKE 'TE'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/rookie', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/rookieall', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/rookieqb', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R' AND `position` LIKE 'QB'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/rookierb', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R' AND `position` LIKE 'RB'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/rookietwr', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R' AND `position` LIKE 'WR'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/rookiete', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `exp` LIKE 'R' AND `position` LIKE 'TE'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/inj', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `players` WHERE `status` LIKE 'IR' OR `status` LIKE 'D' OR `status` LIKE 'Q'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/league1', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `leagues` WHERE `leaguename` LIKE 'Superstars'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/league2', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `leagues` WHERE `leaguename` LIKE 'Tojáslabda'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/league3', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `leagues` WHERE `leaguename` LIKE 'GOATs'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

app.get('/league4', (req, res) => {
    const connection = kapcsolat();
    connection.query("SELECT * FROM `leagues` WHERE `leaguename` LIKE 'SBKings'", (error, result, fields) => {
        if (error)
            res.send({ "error": "Hiba lépett fel a lekérés során." })
        else
            res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(result);
        console.log(result);
    })

    connection.end();
});

// Autentikáció

app.get('/login', (req, res) => {
    const connection = kapcsolat();
    connection.query('SELECT * FROM users', (error, result, fields) => {
        if (error) {
            res.send({ error: "Hiba lépett fel a lekérése során." });
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(result);
        }
    });
    connection.end();
})





app.post('/login',bodyParser.json(), (req, res) => {
    const connection = kapcsolat();
    const adat = req.body;
    console.log(adat);
    //console.log(`SELECT count(*) as db FROM users WHERE usermail = '${adat.usermail}' AND passw = '${adat.passw}'`);
    connection.query(`SELECT count(*) as db FROM users WHERE usermail = '${adat.usermail}' and passw ='${adat.passw}'`, (error, result,fields) => {
        if (error) {
            res.status(500).json({ message: 'Hiba történt a lekérdezés során.' });
            return;
        }

        console.log(result);
        if (result[0].db == 1) {
            res.status(200).json({ message: 'Sikeres bejelentkezés.' });
        } else {
            res.status(401).json({ message: 'Érvénytelen felhasználónév vagy jelszó.' });
        }
    });
    connection.end();
});

// Hírek
app.get('/news/', (req,res)=>{
    const newNews = req.body;
    const connection = kapcsolat();
    connection.connect();
    connection.query('SELECT * FROM news', (error, result, field) =>{
        if(error){
            res.send({error: "Hiba lépett fel a lekérés során."});
        }
        else{
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);
        }
    });    
    connection.end();
})

app.get('/news/:id', (req,res)=>{
    const connection = kapcsolat();
    connection.connect();
    connection.query('SELECT * FROM news WHERE id=' + req.params.id, (error, result, field) =>{
        if(error){
            res.send({error: "Hiba lépett fel a lekérés során."});
        }
        else{
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);
        }
    });    
    connection.end();
})





app.listen(3000);