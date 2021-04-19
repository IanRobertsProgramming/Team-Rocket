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
      $(".Username input").prop( "disabled", false );
      $(".EditButton2 button").hide()
      $(".SubButton2 button").show()
    })

    $(".SubButton2 button").on("click",function(){
      var new_user = $('#new_user').val();
      $.ajax({
          type: 'post',
          url: '/rocket/php/change_info.php',
          data: {new_user: new_user, change: 1},
          success: function(results){
            $(".Username input").prop( "disabled", true );
            $(".EditButton2 button").show()
            $(".SubButton2 button").hide()
          }, error: function (result) {
              alert('Connection Failed');
          }
      });
    })

    $(".EditButton3 button").on("click",function(){
      $(".Email input").prop( "disabled", false );
      $(".EditButton3 button").hide()
      $(".SubButton3 button").show()
    })

    $(".SubButton3 button").on("click",function(){
      var new_email = $('#new_email').val();
      $.ajax({
          type: 'post',
          url: '/rocket/php/change_info.php',
          data: {new_email: new_email, change: 2},
          success: function(results){
            $(".Email input").prop( "disabled", true );
            $(".EditButton3 button").show()
            $(".SubButton3 button").hide()
          }, error: function (result) {
              alert('Connection Failed');
          }
      });
    })
  })

function getUser(){
    $.ajax({
        type: 'post',
        url: '/rocket/php/display-username.php',
        //document.cookie,
        data: {},
        success: function(results){
          $('#new_user').text(results);
        }, error: function (result) {
            alert('Connection Failed');
        }
    });
}

function getEmail(){
    $.ajax({
        type: 'post',
        url: '/rocket/php/display-email.php',
        //document.cookie,
        data: {},
        success: function(results){
          $('#new_email').text(results);
        }, error: function (result) {
            alert('Connection Failed');
        }
    });

}
