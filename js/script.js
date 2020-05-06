$(function() {
  $('.wrapper').addClass('loaded');

  // Burger menu button handler
  $('.icon-menu').click(function() {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('.menu__logo').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // Scrolling offset
  const OFFSET = 60;

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
});
