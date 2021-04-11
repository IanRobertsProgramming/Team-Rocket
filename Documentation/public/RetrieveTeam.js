function retrieveUserTeams() {
    $.ajax({
        type: 'POST',
        url: '../php/retrieve_all_teams.php',
        data: { user: username, pass: password},
        success: function(result) {
            
        }
    });
}