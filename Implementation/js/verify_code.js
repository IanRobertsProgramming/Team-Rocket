function verify_code() {
    var ver_code = $('#verif-code').val();
    
    if (ver_code.length !== 8) {
        displayVerificationError();
    } else {
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
                }
            }, error: function (result) {
               alert('failed');
            }
        });
    }
}

function displayVerificationError() {
    alert("Error: Invalid verification code.");
}