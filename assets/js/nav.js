$('#toggle').click(function () {
  "use strict";
  $(this).toggleClass('active');
  $('.nav-menu').toggleClass('overlay');
  $('#overlay').toggleClass('open');
});
    