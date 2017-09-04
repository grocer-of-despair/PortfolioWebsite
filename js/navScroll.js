function homeScroll() {
  $.scrollTo('#drawer', {duration:300});
}

function projectsScroll() {
  $.scrollTo('#projects', {duration:1000});
}

function contactScroll() {
  $.scrollTo('#contact', {duration:1000});
}

// ===== Scroll to Top ====
// Thanks to jhammann@ https://github.com/jhammann/jquery-navScroll
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

function scrollToTop() {
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });
}
