function verification_email() {
    var email = $('#email').val();

    $.ajax({
        type: 'POST',
        url: '../php/email.php',
        data: { email: email },
        success: function(result) {
            if (result === 'True') {
                var hrefL = "pages/verif_code_page.html";
                window.location.replace(hrefL);
            } else {
                $('#error').text(result);
            }
        }, error: function (result) {
           alert('failed');
        }
    });
}