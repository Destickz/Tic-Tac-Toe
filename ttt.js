var player = "X";
var turns = 0;
var board = [0,0,0,0,0,0,0,0,0];

// To know which cell of the nine cells is clicked and the event that occur after the click
$(".cell").on("click", function(){
var index = $(this).index();

if(board[index] === 0) {
$(this).text(player);
board[index] = player === "X" ? 1 : -1;
turns++;


}



})
