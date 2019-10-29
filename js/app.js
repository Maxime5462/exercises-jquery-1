$(function() {

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  $("#navbarDropdown").click(function(){
    $(".dropdown-menu").toggle();
  })

  $(".nav-link").removeClass("disabled");

  $(".form-control").keyup(function(){
    var value = $(".form-control").val()
    $('span').html(value);
  })

  $("#bt").click(function(){
    var v1 = 'Web Developer'
    var v2 = getRandomIntInclusive(0, 1000000000000)
    var v = v1+' '+v2
    $('#titre').html(v)
  })

  $('.list-group li').click(function() {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });



})
