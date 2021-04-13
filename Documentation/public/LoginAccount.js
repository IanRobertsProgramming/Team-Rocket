function verifyLogin() {
    var username = $('#username').val();
    var password = $('#password').val();

    $.ajax({
        type: 'post',
        url: '/rocket/php/validate_login.php',
        data: { user: username, pass: password},
        success: function(result) {
            if (result === 'True') {
                var hrefL = "main-page.html";
                window.location.replace(hrefL);
            } else {
                displayLoginError();
            }
        }, error: function (result) {
            alert('Connection Failed');
        }
    });
}

function displayLoginError() {
    alert("Invalid username or password.");
}
