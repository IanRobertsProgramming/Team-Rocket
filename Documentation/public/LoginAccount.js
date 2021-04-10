
function verifyLogin() {
    var username = $('#username').val();
    var password = $('#password').val();

    $.ajax({
        type: 'POST',
        url: 'validate_login.php',
        data: { user: username, pass: password},
        success: function(result) {
            if (result === 'True') {
                var hrefL = "";
                window.location.replace(hrefL);
            } else {
                displayLoginError();
            }
        }
    });
}

function displayLoginError() {
    $('#error').text("Error: Invalid password or username.");
}
