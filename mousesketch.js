$(document).ready(function(){
  var cellNumber = 16;
  var cellSize = (960 / cellNumber) - 2;
  var cell = $('<div class="cell"></div>');
  makeGrid(cellNumber);
  hoverFunk();
  
  $("#reset").click(function() {
    cellNumber = prompt("How many columns and rows would you like?", "Between 10 and 100");
    if (cellNumber == null){
      return;
    }
    else {
    makeGrid(cellNumber);
    hoverFunk();
    }
  });
});

function hoverFunk() {
  $('.cell').hover(function() {
  $(this).css("background-color", "white");
  });
}

function makeGrid(cellNumber) {
  $(".cell").remove();
  for (i = 0; i < cellNumber; i++){
  for (j = 0; j < cellNumber; j++){
    var cellSize = (960 / cellNumber) - 2;
    var cell = $('<div class="cell"></div>');
    cell.appendTo('.container')}
    $('.cell').css({"width": cellSize, "height": cellSize});
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}