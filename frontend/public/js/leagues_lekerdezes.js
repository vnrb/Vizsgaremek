// ADATBÁZIS LEKÉRDEZÉS:

AdatokBetolteseTablaba =(adatok)=>{
    const div = document.getElementById("ligaDiv");
    const leaguediv =document.createElement("div");
    leaguediv.setAttribute("id", "leagueDiv")
    leaguediv.setAttribute("class", "table-responsive")
    const leaguefl =document.createElement("div");
    leaguefl.setAttribute("id", "leaguefl")
    leaguediv.appendChild(leaguefl);
    const br = document.createElement("br")
    div.appendChild(br);
    leaguefl.innerHTML = "League name: "+adatok[0].leaguename;
    div.appendChild(leaguediv);
    const fltable = document.createElement("table");
    fltable.setAttribute("id","flLigaTabla")
    const table = document.createElement("table");
    table.setAttribute("id","ligaTabla")
    const leaguefl2 =document.createElement("div");
    leaguefl2.setAttribute("id", "leaguefl2");
    leaguediv.appendChild(leaguefl2);
    const leaguetblDiv =document.createElement("div");
    leaguetblDiv.setAttribute("id", "leaguetblDiv");
    leaguediv.appendChild(leaguetblDiv);
    FejlecKeszites(fltable);
    for(let i =0; i<adatok.length; i++)
    {
        const row = document.createElement("tr");
        CellatASorba(row,adatok[i].members);
        CellatASorba(row,adatok[i].gamesplayed);
        CellatASorba(row,adatok[i].balance);
        CellatASorba(row,adatok[i].s_r_points);
        
        table.appendChild(row);
    }
    leaguefl2.appendChild(fltable);
    leaguetblDiv.appendChild(table);
    leaguediv.appendChild(leaguetblDiv);
}

AdatokBetolteseTablaba2 =(adatok)=>{
    const div = document.getElementById("ligaDiv2");
    const leaguediv =document.createElement("div");
    leaguediv.setAttribute("id", "leagueDiv")
    leaguediv.setAttribute("class", "table-responsive")
    const leaguefl =document.createElement("div");
    leaguefl.setAttribute("id", "leaguefl")
    leaguediv.appendChild(leaguefl);
    const br = document.createElement("br")
    div.appendChild(br);
    leaguefl.innerHTML = "League name: "+adatok[0].leaguename;
    div.appendChild(leaguediv);
    const fltable = document.createElement("table");
    fltable.setAttribute("id","flLigaTabla")
    const table = document.createElement("table");
    table.setAttribute("id","ligaTabla")
    const leaguefl2 =document.createElement("div");
    leaguefl2.setAttribute("id", "leaguefl2");
    leaguediv.appendChild(leaguefl2);
    const leaguetblDiv =document.createElement("div");
    leaguetblDiv.setAttribute("id", "leaguetblDiv");
    leaguediv.appendChild(leaguetblDiv);
    FejlecKeszites(fltable);
    for(let i =0; i<adatok.length; i++)
    {
        const row = document.createElement("tr");
        CellatASorba(row,adatok[i].members);
        CellatASorba(row,adatok[i].gamesplayed);
        CellatASorba(row,adatok[i].balance);
        CellatASorba(row,adatok[i].s_r_points);
        
        table.appendChild(row);
    }
    leaguefl2.appendChild(fltable);
    leaguetblDiv.appendChild(table);
    leaguediv.appendChild(leaguetblDiv);
}



const CellatASorba = (row, adat)=>{
    column = document.createElement("td");
    column.innerHTML = adat;
    row.appendChild(column);
};

const FejlecKeszites = (fltable)=>{
    const row = document.createElement("tr");
    row.setAttribute("id", "leaguefejlec")
    CellatASorba(row,"Player name");
    CellatASorba(row,"Games played");
    CellatASorba(row,"Record");
    CellatASorba(row,"Point balance");
    fltable.appendChild(row);
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
        AdatokBetolteseTablaba2(adatok);

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
        AdatokBetolteseTablaba2(adatok);

    });
};

const Main = ()=>{
    AdatokLekereseAdatbazisbol1();
    AdatokLekereseAdatbazisbol2();
    AdatokLekereseAdatbazisbol3();
    AdatokLekereseAdatbazisbol4();
};

Main();
