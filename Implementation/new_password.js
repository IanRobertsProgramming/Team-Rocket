function new_password() {
    var new_pass = $('#new_pass').val();
    var confirm_pass = $('#confirm_pass').val();
    var ver_code = sessionStorage.getItem("key");

    $.ajax({
        type: 'POST',
        url: '../php/new_password.php',
        data: { ver_code: ver_code, new_pass: new_pass, confirm_pass: confirm_pass},
        success: function(result) {
            if (result === 'True') {
                sessionStorage.removeItem("key");
                var hrefL = "pages/update_successful.html";
                window.location.replace(hrefL);
            } else {
                displayPassChangeError()
                $('#error').text(result);
            }
        }, error: function (result) {
           alert('failed');
        }
    });
}

function displayPassChangeError() {
    $('#error').text("Error: Password could not be changed.");
}