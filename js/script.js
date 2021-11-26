$(function(){
 'userstrict';
 
 $('.burger-btn').on('click',function(){
    $('.bar').toggleClass('bar_active');
    $('body').toggleClass('no-scroll');
    $('.h-nav').toggleClass('nav_active');
     $('.burger-mask').fadeToggle(300);
 });
 
  
});