$(document).ready(function(){
  $("img").on("click", function(){
    event.preventDefault();
    $(this).fadeOut().delay(1000).fadeIn();
  });
})

