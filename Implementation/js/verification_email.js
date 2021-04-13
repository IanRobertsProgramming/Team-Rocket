function verification_email() {
    var email = document.getElementById('email_add').value;
    alert(email);
    if (email.length < 1) {
        alert('Error: Please enter an email.');
    } else {
        $.ajax({
            type: "POST",
            url: '../php/email.php',
            data: {email: email},
            success: function(result) {
                alert('temp');
                if (result === 'True') {
                    var hrefL = "pages/verif_code_page.html";
                    window.location.replace(hrefL);
                } else {
                    alert('Error: Please enter an email.');
                }
            }, error: function (result) {
               alert('failed');
            }
        });
    }
}