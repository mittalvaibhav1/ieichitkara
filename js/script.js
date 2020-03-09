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
    console.log("hell");
   }
   else{
    $('.side-nav').show();
   }
   console.log("What");
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