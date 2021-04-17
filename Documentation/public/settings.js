jQuery(document).ready(function ($) {

    $(".EditButton button").on("click",function(){
      $(".EditButton button").hide()
      $(".SubButton button").show()
    })

    $(".SubButton button").on("click",function(){
      $(".EditButton button").show()
      $(".SubButton button").hide()
    })

    $(".EditButton2 button").on("click",function(){
      $(".Username p").hide()
      $(".Username input").show()
      $(".EditButton2 button").hide()
      $(".SubButton2 button").show()
    })

    $(".SubButton2 button").on("click",function(){
      $(".Username p").show()
      $(".Username input").hide()
      $(".EditButton2 button").show()
      $(".SubButton2 button").hide()
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
    })

    $(".EditButton3 button").on("click",function(){
      $(".Email p").hide()
      $(".Email input").show()
      $(".EditButton3 button").hide()
      $(".SubButton3 button").show()
    })

    $(".SubButton3 button").on("click",function(){
      $(".Email p").show()
      $(".Email input").hide()
      $(".EditButton3 button").show()
      $(".SubButton3 button").hide()
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
    })

    function getSettingsInfo(){
    $.ajax({
        type: 'post',
        url: '/rocket/php/settings.php',
        //document.cookie,
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
