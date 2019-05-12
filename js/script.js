$("#main_slide").find('.carousel-inner .carousel-item.active img').css({'visibility': 'hidden'});
$("#main_slide").closest('.parallax').css({'background-image': 'url("./images/img1.jpeg")'});
var scroll = $(window).scrollTop();
var abtUs = $("#about_us").offset().top;
if(scroll > 100) {
  $('.navbar').css({'background': '#124577'});
  $('.navbar-caption img').css({'width': '69px'});
  $('.navbar-dropdown .navbar-brand').css({'padding': '0.25rem 0'});
} else {
  $('.navbar').css({'background': 'transparent'});
  $('.navbar-caption img').css({'width': '90px'});
  $('.navbar-dropdown .navbar-brand').css({'padding': '1.25rem 0'});
}
if(abtUs > abtUs+20) {
  alert()
}
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if(scroll > 100) {
    $('.navbar').css({'background': '#124577'});
    $('.navbar-caption img').css({'width': '69px'});
    $('.navbar-dropdown .navbar-brand').css({'padding': '0.25rem 0'});
  } else {
    $('.navbar').css({'background': 'transparent'});
    $('.navbar-caption img').css({'width': '90px'});
    $('.navbar-dropdown .navbar-brand').css({'padding': '1.25rem 0'});
  }
  console.log(abtUs)
  if(abtUs == abtUs+20) {
    alert()
  }
});

$(document).ready(function() {
  $(".nav-item").click(function(e) {
    if ($(this).find('a').attr("href").charAt(0) == "#") {
      e.preventDefault();
      $(this).addClass("active").siblings().removeClass("active");
      $("html, body").stop();
      $("html, body").animate({
        scrollTop: $($(this).find('a').attr("href")).offset().top,
      }, 1400);
    } else {
      $($(this)).find('a').attr("target", "_blank");
    }
  })
});

$(document).on("scroll", function() {
  $('.page-section').each(function() {
  var id = $(this).attr("id");
    if (isScrolledIntoView("#" + id)) {
      $('a[href="#'+id+'"]').addClass("active").siblings().removeClass("active");
    }
  })
})

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

