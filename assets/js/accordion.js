$(document).ready(function ($) {
  $('#accordion').find('.acc-toggle').click(function () {

    //Expand or collapse this panel
    $(this).next().slideToggle('slow');

    //Hide the other panels
  //  $(".acc-content").not($(this).next()).slideUp('slow');

  });
});