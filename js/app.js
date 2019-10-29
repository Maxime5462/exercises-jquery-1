$(function() {
  $("#navbarDropdown").click(function(){
    $(".dropdown-menu").toggle();
  })

  $(".nav-link").removeClass("disabled");

  $(".form-control").keyup(function(){
    var value = $(".form-control").val()
    $('span').html(value);

  })

})
