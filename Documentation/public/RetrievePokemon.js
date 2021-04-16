function retrievePokemonMatchingSearch(displayto, data) {
    var selection = $('#searchFilter').val();
    var type;

    if (selection === "1") {
        type = "name";
    } else {
        type = "num";
    }

    $.ajax({
        type: 'POST',
        url: '/rocket/php/pokemon_search.php',
        data: { type: type, data: data },
        success: function(result) {
            console.log("success");
            var json = JSON.parse(result);
            console.log(json);
            if (json.length > 0) {
                displayPokemon(displayto, json);
            }
        }, error: function (result) {
            console.log(result);
            alert('failed');
        }
    });
}

function searchPokemon(data1, data2) {
    retrievePokemonMatchingSearch(1, data1);

    if (data2 !== "") {
        retrievePokemonMatchingSearch(2, data2);
    }
}

function searchClick() {
    var data1 = $('#pkm1in').val();
    var data2 = "";

    if (data1 !== "") {
        searchPokemon(data1, data2);
    } else {
        alert('Please enter a pokemon to search for.');
    }
}

function cmpClick() {
    var data1 = $('#pkm1in').val();
    var data2 = $('#pkm2in').val();

    if (data1 !== "" && data2 !== "") {
        searchPokemon(data1, data2);
    } else {
        alert('Please fill out both fields when comparing.');
    }
}