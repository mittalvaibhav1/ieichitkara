
//Sidenav Controller.
$(document).ready(function () {
  $('#mapwa').click(function () {
    $('.gm-fullscreen-control').click()
  });
  $('.side-nav').hide();

  var speed = 1600;
  var x = $('.top').offset().top
  $(window).scroll(function () {

    if ($(document).scrollTop() < x - 20) {
      $('.side-nav').hide();
    } else {
      $('.side-nav').show();
    }
    if ($(document).width() < 900) {
      $('.side-nav').hide();
    }
  });

  function vis() {
    $('.side-nav').delay(1600).slideDown();
  }
  $("#arrow").click(function () {
    $('html, body').stop().animate({
      scrollTop: $('.top').offset().top
    }, speed, vis());

  })

  $(".iei").click(function () {
    $('html, body').stop().animate({
      scrollTop: $('.top').offset().top
    }, speed);

  })

  $(".event").click(function () {
    $('html, body').stop().animate({
      scrollTop: $('.middle').offset().top
    }, speed);
  })

  $(".team").click(function () {
    $('html, body').stop().animate({
      scrollTop: $('.semimiddle').offset().top
    }, speed);
  })

  $(".contact").click(function () {
    $('html, body').stop().animate({
      scrollTop: $('.bottom').offset().top
    }, speed);
  })
});



//Typewriter
var app = document.getElementById('wel');

var typewriter = new Typewriter(app, {
  loop: false
});

typewriter.typeString('Welcome to IE(I) Student Chapter')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Welcome to IE(I) Student Chapter')
  .start();

//google maps
function init_map() {
  var myOptions = {
    zoom: 17,
    center: new google.maps.LatLng(30.5160865, 76.659899999),
    mapTypeId: google.maps.MapTypeId.ROADMAP,

  };
  map = new google.maps.Map(
    document.getElementById("gmap_canvas"),
    myOptions
  );

  marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.BOUNCE,
    position: new google.maps.LatLng(30.5160865, 76.659899999)
  });
  infowindow = new google.maps.InfoWindow({
    content: "<strong>Chitkara University</strong><br>Chandigarh-Patiala National Highway (NH- 64), Village, Jansla, Rajpura, Punjab 140401<br> Punjab<br>"
  });
  google.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });
  infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, "load", init_map);