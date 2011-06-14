jQuery(function($){
  $(window).resize(function(){
    updateWidth();
  });
  
  function init() {
    $('body').append("<div id=\"width_and_height\" style=\"position:fixed;top:0;left:0;padding:3px 5px;font-size:11px;color:#fff;font-family:Courier,monospace;background-color:#000;\"></div>");
    updateWidth();
  }
  
  function updateWidth() {
    $('#width_and_height').text($(window).width() + 'x' + $(window).height());
  }
  
  init();
});