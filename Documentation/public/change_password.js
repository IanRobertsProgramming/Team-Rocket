function new_password() {
    var new_pass = $('#new-password').val();
    var confirm_pass = $('#confirm-password').val();
    var ver_code = sessionStorage.getItem("key");

    if (new_pass !== confirm_pass) {
        displayPassErr();
    } else if (new_pass.length < 8) {
        displayRequirementsError();
    } else {
        $.ajax({
            type: 'POST',
            url: '/rocket/php/new_password.php',
            data: { ver_code: ver_code, new_pass: new_pass, confirm_pass: confirm_pass},
            success: function(result) {
                if (result === 'True') {
                    sessionStorage.removeItem("key");
                    var hrefL = "update_successful.html";
                    window.location.replace(hrefL);
                } else {
                    displayPassChangeError()
                }
            }, error: function(result) {
               alert('failed');
            }
        });
    }
}

function displayPassErr() {
    alert("Error: Passwords don't match.");
}

function displayRequirementsError() {
    alert("Error: Password must be a length of 8 or greater.");
}

function displayPassChangeError() {
    alert("Error: Password could not be changed.");
}