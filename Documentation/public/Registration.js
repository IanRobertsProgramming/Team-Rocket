function createNewUser() {
    var email = $('#email').val();
    var username = $('#username').val();
    var password = $('#password').val();
    var cpassword = $('#cpassword').val();

    if (password !== cpassword) {
        passError();
    } else if (password.length < 8) {
        displayRequirementsError();
    } else {    
        $.ajax({
            type: 'POST',
            url: '../php/create_user.php',
            data: { email: email, user: username, pass: password},
            success: function(result) {
                var hrefL = "";
                window.location.replace(hrefL);
            }
        });
    }
}

function passError() {
    $('#error').text("Error: Passwords don't match.");
}

function displayRequirementsError() {
    $('#error').text("Error: Password must be a length of 8 or greater.");
}