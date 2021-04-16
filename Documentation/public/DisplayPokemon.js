function displayPokemon(type, data) {
    var swTb;
    var statsTb;

    if (data.length > 0) {
        var locations = [];
        var pkmTypes = [];
        var i;

        for (i = 0; i < data.length; i++) {
            if (!locations.includes(data[i].location_name)) {
                locations.push(data[i].location_name);
            }   

            if (!pkmTypes.includes(data[i].type_name)) {
                pkmTypes.push(data[i].type_name);
            }
        }

        var loc = "<ul>";
        for (i = 0; i < locations.length; i++) {
            loc = loc + "<li>" + locations[i] + "</li>";
        }
        loc = loc + "</ul>";


        if (type === 1) {
            $('#pkmName1').text("#" + data[0].poke_id + " " + data[0].poke_name);
            swTb = $("#swtBody1 .type");
            statsTb = $('#statBody1 .stats');
            $('#description1').append(loc);
        } else {
            $('#pkmName2').text("#" + data[0].poke_id + " " + data[0].poke_name);
            swTb = $("#swtBody2 .type");
            statsTb = $('#statBody2 .stats');
            $('#description2').append(loc);
        }

        var stats = [data[0].HP, data[0].Attack, data[0].defense, data[0].Special_Attack, data[0].Special_Defense, data[0].Speed];

        if (pkmTypes.length === 1) {
            pkmTypes.push("");
        }

        var sw = calcSW(pkmTypes[0], pkmTypes[1]);

        i = 0;
        swTb.each(function () {
            $(this).find(".sw").text(sw[i]);
            i = i + 1;
        });

        i = 0;
        statsTb.each(function () {
            $(this).find(".stat").text(stats[i]);
            i = i + 1;
        });

    } else {
        alert("No search results for pokemon #" + type + ".");
    }

}

function savePokemon() {

}

function calcSW(type1, type2) {
    var types = ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting",
        "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon"];
    var swTable = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1],
                   [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5],
                   [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5],
                   [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5],
                   [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5],
                   [1, 1, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2],
                   [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1],
                   [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 2, 0.5, 0.5, 1],
                   [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1],
                   [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1],
                   [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1],
                   [1, 0.5, 1, 1, 2, 1, 0.5, 2, 1, 0.5, 2, 1, 1, 0.5, 1],
                   [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1],
                   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 1, 2]];
    var sw = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    var typepos = 0;
    var i;
    
    while (typepos < types.length && type1.localeCompare(types[typepos]) !== 0) {
        typepos = typepos + 1;
    }

    for (i = 0; i < types.length; i++) {
        sw[i] = swTable[i][typepos];
    }

    if (type2.localeCompare("") !== 0) {
        typepos = 0;
        while (typepos < types.length && type2.localeCompare(types[typepos]) !== 0) {
            typepos = typepos + 1;
        }

        for (i = 0; i < types.length; i++) {
            sw[i] = sw[i] * swTable[i][typepos];
        }
    }

    return sw;
}

// $(document).ready(function () {
//     $('.teamsListBtn').click(function() {
//         var pkm = $(this).val();
//         displayPokemon(pkm);
//     });
// });