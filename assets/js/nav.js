$('#toggle').click(function () {
  "use strict";
  $(this).toggleClass('active');
  $('div.nav-menu').toggleClass('overlay');
  $('#overlay').toggleClass('open');
});
    