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
        CellatASorba(row,adatok[i].injtype);;

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
    CellatASorba(row,"INJ Type")
    table.appendChild(row);
};

const AdatokLekereseAdatbazisbol = ()=>{
    let adatok =[];
    fetch("http://127.0.0.1:3000/inj")
    .then((res)=>{
        if(!res.ok)
            console.log("Hiba lépett fel az adatbázis kapcsolat létrehozása során");
        else
            return res.json();

    })
    .then((res)=>{
        res.forEach(element =>{
            adatok.push(element)
            console.log(adatok)
        });
        AdatokBetolteseTablaba(adatok);

    });
};

const Main = ()=>{
    AdatokLekereseAdatbazisbol();
};

Main();