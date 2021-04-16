function getSettingsInfo(){
$.ajax({
    type: 'post',
    url: '/rocket/php/settings.php',
    document.cookie
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

function changeUser(){
    var new_username = $('#new_username').val();
    var change = 1;
    $.ajax({
        type: 'POST',
        url: '/rocket/php/change_info.php',
        data: { ver_code: ver_code, new_pass: new_user, change: change},
        success: function(result) {
        }, error: function (result) {
            alert('Connection Failed');
        }
    });
}
}

function changeEmail(){
    var new_email = $('#new_email').val();
    var change = 2;
    $.ajax({
        type: 'POST',
        url: '/rocket/php/change_info.php',
        data: { ver_code: ver_code, new_pass: new_user, change: change},
        success: function(result) {
        }, error: function (result) {
            alert('Connection Failed');
        }
    });
}
}
