// ADATBÁZIS LEKÉRDEZÉS:

AdatokBetolteseTablaba =(adatok)=>{
    const div = document.getElementById("tablaDiv");
    const leaguediv =document.createElement("div");
    leaguediv.setAttribute("id", "leaguenameDiv")
    const br = document.createElement("br")
    div.appendChild(br);
    leaguediv.innerHTML = "Liga neve: "+adatok[0].leaguename;
    div.appendChild(leaguediv);
    const table = document.createElement("table");
    FejlecKeszites(table);
    for(let i =0; i<adatok.length; i++)
    {
        const row = document.createElement("tr");
        CellatASorba(row,adatok[i].members);
        CellatASorba(row,adatok[i].gamesplayed);
        CellatASorba(row,adatok[i].balance);
        CellatASorba(row,adatok[i].s_r_points);
        
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
    CellatASorba(row,"Player name");
    CellatASorba(row,"Games played");
    CellatASorba(row,"Record");
    CellatASorba(row,"Point balance");
    ;
    table.appendChild(row);
};

const AdatokLekereseAdatbazisbol1 = ()=>{
    let adatok =[];
    fetch("http://127.0.0.1:3000/league1")
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

const AdatokLekereseAdatbazisbol2 = ()=>{
    let adatok =[];
    fetch("http://127.0.0.1:3000/league2")
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

const AdatokLekereseAdatbazisbol3 = ()=>{
    let adatok =[];
    fetch("http://127.0.0.1:3000/league3")
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

const AdatokLekereseAdatbazisbol4 = ()=>{
    let adatok =[];
    fetch("http://127.0.0.1:3000/league4")
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
    AdatokLekereseAdatbazisbol1();
    AdatokLekereseAdatbazisbol2();
    AdatokLekereseAdatbazisbol3();
    AdatokLekereseAdatbazisbol4();
};

Main();
