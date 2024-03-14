function Feltoltes() {
    const fileInput = document.getElementById("input");
    const reader = new FileReader();

    reader.readAsText(fileInput.files[0], "UTF-8");

    reader.onload = function () {
        var adatok = [];
        var sorok = reader.result.split("\r\n");
        var fejlecAdatok = sorok.splice(0,1);
        sorok.splice(-1,1);

        fejlecAdatok.forEach((element) => {
            const fejlecnevek = element.split(";");
            const fejlec ={
                name: fejlecnevek[0],
                team: fejlecnevek[1],
                position: fejlecnevek[2],
                status: fejlecnevek[3],
                games_played: fejlecnevek[4],
                passed_yards: fejlecnevek[5],
                passed_tds: fejlecnevek[6],
                passed_int: fejlecnevek[7],
                rushed_yards: fejlecnevek[8],
                rushed_tds: fejlecnevek[9],
                rec: fejlecnevek[10],
                rec_yards: fejlecnevek[11],
                rec_tds: fejlecnevek[12],
                sackes: fejlecnevek[13],
                rec_ints: fejlecnevek[14],
                forced_fumbles: fejlecnevek[15],
                fumbles_returned: fejlecnevek[16],
                point_per_game: fejlecnevek[17],
                total_point: fejlecnevek[18],
            };
            adatok.push(fejlec);
        });


        sorok.forEach((element) => {
            const elemek = element.split(";");
            const player = {
                name: elemek[0],
                team: elemek[1],
                position: elemek[2],
                status: elemek[3],
                games_played: elemek[4],
                passed_yards: elemek[5],
                passed_tds: elemek[6],
                passed_int: elemek[7],
                rushed_yards: elemek[8],
                rushed_tds: elemek[9],
                rec: elemek[10],
                rec_yards: elemek[11],
                rec_tds: elemek[12],
                sackes: elemek[13],
                rec_ints: elemek[14],
                forced_fumbles: elemek[15],
                fumbles_returned: elemek[16],
                point_per_game: elemek[17],
                total_point: elemek[18],
            };
            adatok.push(player);
        });

        tablaGeneralas();

        function tablaGeneralas()
        {
            var tablaAdatok = '<table>';
            adatok.forEach(element =>
                {
                    tablaAdatok += '<tr><td>'+element.name+'<td><td>'+element.team+'<td><td>'+element.position+'<td><td>'+element.status+'<td><td>'+element.games_played+'<td><td>'+element.passed_yards+'<td><td>'+element.passed_tds+'<td><td>'+element.passed_int+'<td><td>'+element.rushed_yards+'<td><td>'+element.rushed_tds+'<td><td>'+element.rec+'<td><td>'+element.rec_yards+'<td><td>'+element.rec_tds+'<td><td>'+element.sackes+'<td><td>'+element.rec_ints+'<td><td>'+element.forced_fumbles+'<td><td>'+element.fumbles_returned+'<td><td>'+element.point_per_game+'<td><td>'+element.total_point+'<td><tr>';
                });
            
            tablaAdatok += '</table>'

            document.getElementById('tabla').innerHTML = tablaAdatok;

        };

    };
}