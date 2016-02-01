// IE9 Dashboard Toggle Fix

$(function(){
  var halfHeight = ($(window).height() - 138) / 2;
  var fullHeight = ($(window).height() - 138);

  $('.todo, .reports, .approve').css('height',halfHeight + 'px');

  $('.btn-more').click(function() {
    var sectionToggle = $(this).closest('section');
    sectionToggle.toggleClass('expand');

    if (sectionToggle.hasClass('expand')) {
      sectionToggle.removeClass('expand');
      sectionToggle.css('height',halfHeight + 'px');
    } 
    else {
      sectionToggle.addClass('expand');
      sectionToggle.css('height',fullHeight + 'px');
    }
  });
});