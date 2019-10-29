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
    var value = $(".form-control").val();
    $('span').html(value);
  })

  $("#bt").click(function(){
    var v1 = 'Web Developer';
    var v2 = getRandomIntInclusive(0, 1000000000000);
    var v = v1+' '+v2;
    $('#titre').html(v);
  })

  $('.list-group li').click(function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
  });

  $("#bt-video").click(function(){
    var player = document.querySelector('#video');
    player.play();
    var x = setTimeout(function() { player.pause(); }, 10000);
  })

  $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $("#showModal").click(function(){
    $('#modal').modal('toggle')
  })

  $("#myPopover").click(function(){
    $('#myPopover').popover();
  })


  var progressBar = $("#progressBar");

  setInterval(function () {
    var width = parseInt(progressBar[0].style.getPropertyValue('width'))

    if (width >= 100) {
      progressBar.css('width', 0)
    } else {
      progressBar.css('width', '100%') //width + 5 + '%'
    }
  }, 1000)



})
