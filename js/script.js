
$('#main_slide .carousel-item').each(function(i, j) {
  console.log(i, j);
  var vImgSrc = $(j).find('img').attr('src');
  $(j).find('img').css({'visibility': 'hidden'});
  $(j).css({'background-image': 'url("' + vImgSrc + '")'});  
});
$('.card-body.hide').hide();
$('.card-body').on('click', '.btn', function() {
  $('.card-body').toogle();
});

var scroll = $(window).scrollTop();
var abtUs = $("#about_us").offset().top;
if(scroll > 100) {
  $('.navbar').addClass('nav-scrolled');
} else {
  $('.navbar').removeClass('nav-scrolled');
}
if(abtUs > abtUs+20) {
  alert()
}
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if(scroll > 100) {
    $('.navbar').addClass('nav-scrolled');
  } else {
    $('.navbar').removeClass('nav-scrolled');
  }
  console.log(abtUs)
  if(abtUs == abtUs+20) {
    alert()
  }
});

$(document).ready(function() {
  $("a").click(function(e) {
    if ($(this).hasClass('nav-link') && $(this).attr("href").charAt(0) == "#") {
      e.preventDefault();
      $(this).parent().addClass("active").siblings().removeClass("active");
      $("html, body").stop();
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top,
      }, 1400);
    } else {
      $('.nav-link').parent().removeClass("active");
      $($(this)).attr("target", "_blank");
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