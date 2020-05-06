$(function() {
  $('.wrapper').addClass('loaded');

  $('.icon-menu').click(function() {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('.menu__logo').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
