function addPokemon() {

} 

function removePokemmon() {

}

function clearTeam() {

}

function createTeam() {

}

function displayTeam(team) {
    $.ajax({
        type: 'POST',
        url: '/rocket/php/get_team_pkm.php',
        data: { id1: team.pkm1ID, id2: team.pkm2ID, id3: team.pkm3ID, id4: team.pkm4ID, id5: team.pkm5ID, id6: team.pkm6ID },
        success: function(result) {
            alert("works");
            var json = JSON.parse(result);
            console.log(json);
            for (var i=0; json.length; i++) {
                $('#team' + i).text(json.poke_name);
            }
        }
    });
}

function displayMaxError() {
    
}

function teamClickHandler() {

}

