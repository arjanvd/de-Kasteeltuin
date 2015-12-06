// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  
function getRelatedContent(el){
  return $($(el).attr('href'));
}
// Get link by section or article id
function getRelatedNavigation(el){
  return $('.c-block--sidebar a[href=#'+$(el).attr('id')+']');
}


// ======================================
// Smooth scroll to content
// ======================================
$('.c-block--sidebar a').on('click',function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop:getRelatedContent(this).offset().top}, 2000);
});


// ======================================
// Waypoints
// ======================================
// Default cwaypoint settings
// - just showing


$('.l-main--about')
   .waypoint(function(direction) {
     // Highlight element when related content
     // is 10% percent from the bottom... 
     // remove if below
     getRelatedNavigation(this).toggleClass('active', direction === 'down');
   }, {
     offset: '40%' // 
   })
   .waypoint(function(direction) {
     // Highlight element when bottom of related content
     // is 100px from the top - remove if less
     // TODO - make function for this
     getRelatedNavigation(this).toggleClass('active', direction === 'up');
   }, {
     offset: function() {  return -$(this).height(); }
   });
  
});