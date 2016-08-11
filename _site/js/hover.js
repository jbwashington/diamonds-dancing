$('a.projects').hover(function(){
  $(this).children().stop().eq(0).animate({
    opacity: 0
  }).next().fadeIn();
}, function(){
  $(this).children().stop().eq(1).fadeOut().prev().animate({
    opacity: 1
  });
});
