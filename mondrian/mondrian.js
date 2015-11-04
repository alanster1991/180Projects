var paint = 'white';
$('.color').click(function(event) {
  paint = $(event.target).css('background-color');
  console.log(paint);
});
$('.paint').click(function(event) {
  paint = $(event.target).css('background-color', paint);  
});
