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

      var new_user = $('#new_user').val();
      $.ajax({
          type: 'POST',
          url: '/rocket/php/change_info.php',
          data: {new_info: new_user, change: 1},
          success: function(result){
            $(".Username p").show()
            $(".Username input").hide()
            $(".EditButton2 button").show()
            $(".SubButton2 button").hide()
              }
          }
      });
    });

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
      $.ajax({
          type: 'POST',
          url: '/rocket/php/change_info.php',
          data: {new_info: new_user, change: 2},
          success:
          }
      });
    })
  })

function getSettingsInfo(){
    $.ajax({
        type: 'post',
        url: '/rocket/php/settings.php',
        //document.cookie,
        data: { user: username, pass: password},
        success:
        $('#new_user').val() = ;
        $('#new_email').val() = ;
        }, error: function (result) {
            alert('Connection Failed');
        }
    });

}
