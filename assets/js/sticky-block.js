$(document).ready(function () {
  "use strict";
  
  if ($(window).width() > 600) {

    $("#sticky_faq").stick_in_parent({
      parent: '.l-wrapper',
      offset_top: 80 // moet net iets meer dan de hoogte van de header!
    });
  
    $("#sticky_about").stick_in_parent({
      parent: '#sticky-anchor',
      offset_top: 80, // moet net iets meer dan de hoogte van de header!
      bottoming: true
    });
 
  }

});