// ADATBÁZIS LEKÉRDEZÉS:

AdatokBetolteseTablaba =(adatok)=>{
    const div = document.getElementById("tablaDiv");
    const table = document.createElement("table");
    FejlecKeszites(table);
    for(let i =0; i<adatok.length; i++)
    {
        const row = document.createElement("tr");
        CellatASorba(row,adatok[i].playername);
        CellatASorba(row,adatok[i].team);
        CellatASorba(row,adatok[i].position);
        CellatASorba(row,adatok[i].exp);
        CellatASorba(row,adatok[i].status);
        CellatASorba(row,adatok[i].gamesplayed);
        CellatASorba(row,adatok[i].pyards);
        CellatASorba(row,adatok[i].ptds);
        CellatASorba(row,adatok[i].pint);
        CellatASorba(row,adatok[i].rushyards);
        CellatASorba(row,adatok[i].rushtds);
        CellatASorba(row,adatok[i].rec);
        CellatASorba(row,adatok[i].recyards);
        CellatASorba(row,adatok[i].rectds);
        CellatASorba(row,adatok[i].sck);
        CellatASorba(row,adatok[i].recints);
        CellatASorba(row,adatok[i].ffumbles);
        CellatASorba(row,adatok[i].freturn);
        CellatASorba(row,adatok[i].ppg);
        CellatASorba(row,adatok[i].totalpoint);

        table.appendChild(row);
    } 
    div.appendChild(table);

}    

const CellatASorba = (row, adat)=>{
    column = document.createElement("td");
    column.innerHTML = adat;
    row.appendChild(column);
};

const FejlecKeszites = (table)=>{
    const row = document.createElement("tr");
    row.setAttribute("id", "fejlec")
    CellatASorba(row,"Player Name");
    CellatASorba(row,"Team");
    CellatASorba(row,"Position");
    CellatASorba(row,"Exp");
    CellatASorba(row,"Status");
    CellatASorba(row,"GP");
    CellatASorba(row,"P-yards");
    CellatASorba(row,"P-tds");
    CellatASorba(row,"P-int");
    CellatASorba(row,"R-yards");
    CellatASorba(row,"R-tds");
    CellatASorba(row,"Rec");
    CellatASorba(row,"RecYards")
    CellatASorba(row,"Rectds");
    CellatASorba(row,"Sck");
    CellatASorba(row,"RecInts");
    CellatASorba(row,"Ffumbles");
    CellatASorba(row,"Freturn");
    CellatASorba(row,"PPG");
    CellatASorba(row,"Total points");
    table.appendChild(row);
};

const AdatokLekereseAdatbazisbol = ()=>{
    let adatok =[];
    fetch("http://127.0.0.1:3000/rookie")
    .then((res)=>{
        if(!res.ok)
            console.log("Hiba lépett fel az adatbázis kapcsolat létrehozása során");
        else
            return res.json();

    })
    .then((res)=>{
        res.forEach(element =>{
            adatok.push(element)
        });
        AdatokBetolteseTablaba(adatok);

    });
};

const Main = ()=>{
    AdatokLekereseAdatbazisbol();
};

Main();

// SZŰRÉS

function positionAll(){

    const div = document.getElementById("tablaDiv");
    div.innerHTML="";

    const AdatokLekereseAdatbazisbol = ()=>{
        let adatok =[];
        console.log(adatok)
        fetch("http://127.0.0.1:3000/rookieall")
        .then((res)=>{
            if(!res.ok)
                console.log("Hiba lépett fel az adatbázis kapcsolat létrehozása során");
            else
                return res.json();
    
        })
        .then((res)=>{
            res.forEach(element =>{
                adatok.push(element)
            });
            AdatokBetolteseTablaba(adatok);
    
        });
    };

    AdatokLekereseAdatbazisbol();
}

function positionQb(){

    const div = document.getElementById("tablaDiv");
    div.innerHTML="";

    const AdatokLekereseAdatbazisbol = ()=>{
        let adatok =[];
        console.log(adatok)
        fetch("http://127.0.0.1:3000/rookieqb")
        .then((res)=>{
            if(!res.ok)
                console.log("Hiba lépett fel az adatbázis kapcsolat létrehozása során");
            else
                return res.json();
    
        })
        .then((res)=>{
            res.forEach(element =>{
                adatok.push(element)
            });
            AdatokBetolteseTablaba(adatok);
    
        });
    };

    AdatokLekereseAdatbazisbol();
}

function positionRb(){

    const div = document.getElementById("tablaDiv");
    div.innerHTML="";

    const AdatokLekereseAdatbazisbol = ()=>{
        let adatok =[];
        console.log(adatok)
        fetch("http://127.0.0.1:3000/rookierb")
        .then((res)=>{
            if(!res.ok)
                console.log("Hiba lépett fel az adatbázis kapcsolat létrehozása során");
            else
                return res.json();
    
        })
        .then((res)=>{
            res.forEach(element =>{
                adatok.push(element)
            });
            AdatokBetolteseTablaba(adatok);
    
        });
    };

    AdatokLekereseAdatbazisbol();
}

function positionWr(){

    const div = document.getElementById("tablaDiv");
    div.innerHTML="";

    const AdatokLekereseAdatbazisbol = ()=>{
        let adatok =[];
        console.log(adatok)
        fetch("http://127.0.0.1:3000/rookiewr")
        .then((res)=>{
            if(!res.ok)
                console.log("Hiba lépett fel az adatbázis kapcsolat létrehozása során");
            else
                return res.json();
    
        })
        .then((res)=>{
            res.forEach(element =>{
                adatok.push(element)
            });
            AdatokBetolteseTablaba(adatok);
    
        });
    };

    AdatokLekereseAdatbazisbol();
}

function positionTe(){

    const div = document.getElementById("tablaDiv");
    div.innerHTML="";

    const AdatokLekereseAdatbazisbol = ()=>{
        let adatok =[];
        console.log(adatok)
        fetch("http://127.0.0.1:3000/rookiete")
        .then((res)=>{
            if(!res.ok)
                console.log("Hiba lépett fel az adatbázis kapcsolat létrehozása során");
            else
                return res.json();
    
        })
        .then((res)=>{
            res.forEach(element =>{
                adatok.push(element)
            });
            AdatokBetolteseTablaba(adatok);
    
        });
    };

    AdatokLekereseAdatbazisbol();
}