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
            url: '/rocket/php/register.php',
            data: { email: email, user: username, pass: password},
            success: function(result) {
                var hrefL = "main_login.html";
                window.location.replace(hrefL);
            }, error: function (result) {
                alert('Connection Failed');
            }
        });
    }
}

function passError() {
    alert("Error: Passwords don't match.");
    $('#error').text("Error: Passwords don't match.");
}

function displayRequirementsError() {
    alert("Error: Password must be a length of 8 or greater.");
    $('#error').text("Error: Password must be a length of 8 or greater.");
}