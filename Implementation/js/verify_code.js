function verify_code() {
    var ver_code = $('#ver_code').val();

    $.ajax({
        type: 'POST',
        url: '../php/verification_code.php',
        data: { ver_code: ver_code },
        success: function(result) {
            if (result === 'True') {
                var hrefL = "pages/new_password.html";
                window.location.replace(hrefL);
            } else {
                displayVerificationError()
                $('#error').text(result);
            }
        }, error: function (result) {
           alert('failed');
        }
    });
}

function displayVerificationError() {
    $('#error').text("Error: Invalid verification code.");
}