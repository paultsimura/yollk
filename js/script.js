$(function() {
  $('.wrapper').addClass('loaded');

  // Burger menu button handler
  $('.icon-menu').click(function() {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // Scrolling offset
  const OFFSET = 0;

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
      && location.hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - (OFFSET - 2))
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.menu .js-scroll-trigger').click(function() {
    $('.icon-menu').toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  function ibg() {
    $.each($('.ibg'), function () {
      if ($(this).find('img').length) {
        $(this).css('background-image', `url('${$(this).find('img').attr('src')}')`);
      }
    });
  }

  ibg();

  // Collapse Navbar
  const activateNavbar = function() {
    let $mainNavbar = $("#main-navbar");
    if ($mainNavbar.offset().top > OFFSET) {
      $mainNavbar.addClass('active');
    } else {
      $mainNavbar.removeClass('active');
    }
  };
  // Collapse now if page is not at top
  activateNavbar();
});
