/* 展開 Sections
--------------------------------------------------------------------- */
$('.btn-more').click(function() {
  var sectionToggle = $(this).closest('section');
  sectionToggle.toggleClass('expand');
});

/* Tab Lv1
--------------------------------------------------------------------- */
var _showTab = 0;
// var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
// $($defaultLi.find('a').attr('href')).siblings().hide();

// var $defaultLi2 = $('ul.txn-tab-lv2 li').eq(_showTab).addClass('active');
// $($defaultLi2.find('a').attr('href')).siblings().hide();

$('ul.tabs li:first-child').addClass('active');
$(".tab-content").not(".active").hide();
$(".tab-content:first-child").show();

$('ul.tabs li').click(function(e) {
  var $this = $(this),
    _clickTab = $this.find('a').attr('href');
  
  $this.addClass('active').siblings('.active').removeClass('active');
  
  $(_clickTab).stop(false, true).fadeIn().siblings().hide();
  return false;
  }).find('a').focus(function(){
    this.blur();
});

/* Tab Lv2 
--------------------------------------------------------------------- */
var tabSet = null;
$(function(){
  tabSet = $('#tabSet').scrollTabs();
  //tabSet.addTab('<li>New Tab</li>');
  $('.add-tab-btn').on('click',function(e){
    e.preventDefault();
    tabSet.addTab('<li><a href="#">New Tab</a></li>');
  });
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
  $( ".input-date" ).datepicker(opt);
});

/* Global Functions
--------------------------------------------------------------------- */
//// Back To Top 
$('a.gotop').click(function(){
  $('html, body').animate({scrollTop : 0},500);
  return false;
});

//// Top Menubar fix top
$(function(){
  var win = $( window );
  var navbar = $(".esb-nav");
  var mainmenu = $('.main-menu');
  var mainmenuli = $('.main-menu > li');
  var mainmenulitxt = ('.main-menu > li > a');
  var txntitle = $('.txn-title');
  var mainwrap = $('.main-wrap');

  var wh = win.height();
  wh = 38; // esb-header height
            
  win.scroll(function() {
    var topvalue = win.scrollTop();

    if (topvalue >= wh)
    {
      $(navbar).css({"position":"fixed","top":0+"px","height":wh+"px"}); 
      $(mainmenuli).css({"height":wh+"px"});  
      $(mainmenulitxt).css({"lineHeight":44+"px"});  
      $(mainmenu).find('.icon').hide();    
      $(txntitle).css({"position":"fixed","top":wh+wh+"px",opacity:.95});  
      $(mainwrap).css({"position":"absolute","top":180+"px","width":100+"%"});   
    }
    else {
      $(navbar).css({"position":"relative","height":100+"px"});
      $(mainmenuli).css({"height":100+"px"}); 
      $(mainmenulitxt).css({"lineHeight":16+"px"});   
      $(mainmenu).find('.icon').show();  
      $(txntitle).css({"position":"relative","top":"auto",opacity:1});   
      $(mainwrap).css({"position":"relative","top":"auto"});   
    }
  });         
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

//// Show Hidden Blocks
$(function(){
  $( "#show-hidden-block" ).click(function(e){
    e.preventDefault();
    $('.hidden').show(100);
  });
});
