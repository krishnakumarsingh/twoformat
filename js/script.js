$(function() {
  var scroll = $(window).scrollTop();
  var abtUs = $("#about_us").offset().top;
  $('.card-body.registraion').hide();
  $('.btn-switch').on('click', function() {
    event.preventDefault();
    $('.card-body').toggle();
  });
  $('#main_slide .carousel-item').each(function(i, j) {
    console.log(i, j);
    var vImgSrc = $(j).find('img').attr('src');
    $(j).find('img').css({'visibility': 'hidden'});
    $(j).css({'background-image': 'url("' + vImgSrc + '")'});  
  });

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
      var offsetTop = 0;// = $($(this).attr("href")).offset().top;
      var navBar = 0;// = $('.navbar').height();
      if ($(this).hasClass('nav-link') && $(this).attr("href").charAt(0) == "#" && $(this).attr("href").substr(1).length > 0) {
        offsetTop = $($(this).attr("href")).offset().top;
        navBar = $('.navbar').height();
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
      } else {
        $('.nav-link').parent().removeClass("active");
        //$($(this)).attr("target", "_blank");
      }
      $("html, body").stop();
      $("html, body").animate({
        scrollTop: offsetTop - navBar,
      }, 1400);
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
  setTimeout(function(){
    $('.carousel-item').eq(0).addClass('active');
  }, 1000);
});