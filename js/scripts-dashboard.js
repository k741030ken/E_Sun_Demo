/* 展開 Sections
--------------------------------------------------------------------- */
$('.btn-more').click(function() {
  var sectionToggle = $(this).closest('section');
  sectionToggle.toggleClass('expand');
});

/* 待辦事項 Tab
--------------------------------------------------------------------- */
var _showTab = 0;

var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
$($defaultLi.find('a').attr('href')).siblings().hide();

$('ul.tabs li').click(function(e) {
  var $this = $(this),
    _clickTab = $this.find('a').attr('href');
  
  $this.addClass('active').siblings('.active').removeClass('active');
  
  $(_clickTab).stop(false, true).fadeIn().siblings().hide();
  return false;
  }).find('a').focus(function(){
    this.blur();
});

/* 行事曆
--------------------------------------------------------------------- */
var opt = {
   //dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
   dayNamesMin:["日","一","二","三","四","五","六"],
   monthNames:["1","2","3","4","5","6","7","8","9","10","11","12"],
   //monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
   prevText:"上月",
   nextText:"次月",
   weekHeader:"週",
   showMonthAfterYear:true,
   dateFormat:"yy-mm-dd"
   };

$(function(){
  $( "#datepicker" ).datepicker(opt);
});

//// Modal
$(function(){
  $('[data-popup-target]').click(function () {
    $('.popup-overlay').addClass('overlay');
    var activePopup = $(this).attr('data-popup-target');
    $(activePopup).addClass('visible');
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27 && $('.popup-overlay').hasClass('overlay')) {
      clearPopup();
    }
  });

  $('.panel-close').click(function () {
    clearPopup();
  });
  $('.popup-overlay').click(function () {
    clearPopup();
  });

  function clearPopup() {
    $('.panel-wrap.visible').removeClass('visible');
    setTimeout(function() {
     $('.popup-overlay').removeClass('overlay');
    }, 200);
  }
});
