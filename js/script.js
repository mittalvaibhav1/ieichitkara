/*Work in progress*/  
$( document ).ready(function() {
  /*document.location.href="#index";
  $(".home").focus();*/
  $('.side-nav').hide();
  var speed = 1600;
  var x=$('.top').offset().top 
  $(window).scroll(function() {
   if($(document).scrollTop()<x-20)
   {
    $('.side-nav').hide();
   }
   else{
    $('.side-nav').show();
   }
});
  function vis(){
    $('.side-nav').delay(1600).slideDown();
  }
  $("#arrow").click(function(){
    $('html, body').stop().animate({ 
      scrollTop: $('.top').offset().top 
    }, speed, vis());
    
  })


  $(".iei").click(function(){
    $('html, body').stop().animate({ 
      scrollTop: $('.top').offset().top 
    }, speed); 
 
  })
  
  $(".event").click(function(){
    $('html, body').stop().animate({ 
      scrollTop: $('.middle').offset().top 
    }, speed);        
  })

  $(".team").click(function(){
    $('html, body').stop().animate({ 
      scrollTop: $('.semimiddle').offset().top 
    }, speed);        
  })
  
  $(".contact").click(function(){
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

          function init_map() {
            var myOptions = {
              zoom: 17,
              center: new google.maps.LatLng(30.5160865, 76.659899999),
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                }
              ]
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
    