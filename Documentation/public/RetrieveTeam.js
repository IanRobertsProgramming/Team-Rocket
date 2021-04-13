function retrieveUserTeams() {
    $.ajax({
        type: 'POST',
        url: '/rocket/php/retrieve_all_teams.php',
        data: {},
        success: function(result) {
            alert('works');
            var json = JSON.parse(result);
            console.log(json)
            if (json.length > 0) {
                displayTeam(result[0]);
            }
        }
    });
}