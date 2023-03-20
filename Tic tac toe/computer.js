var player = "❌";
var computer = "⭕";
var turns = 0;

$(".cell").click(function(){
   // check if the cell has already been clicked or if the game is over
   if ($(this).text() !== "" || checkWin()) {
     return;
   } 

// update the cell with the current player's mark
$(this).text(player).addClass("times");
if (checkWin()) {
  setTimeout(function () {
    resetGame ();
  }, 1000);
 }
 
 else {
// set time before computer make a turn  
setTimeout(function () {
  computerTurn();
  $("h1").text("It's ❌ turn!");
  
  if (checkWin()) {
    setTimeout(function () {
      resetGame ();
    }, 600);
   }
}, 1000); 

if (player === "❌") {
$("h1").text("It's ⭕ turn!");
}

turns++; 
}
});



function computerTurn () {
//get all the empty cells on the board
  var emptyCells = $(".cell").filter(function() {
    return $(this).text() === "";
  });

// pick a random empty cell to make a move
var randomIndex = Math.floor(Math.random() * emptyCells.length);
var randomCell = emptyCells.eq(randomIndex);

// update the text of the cell to indicate that the computer has made a move
randomCell.text(computer).addClass("times");

}  



function checkWin() {
  // check for wins in the game
   var cells = $(".cell");
   var winningCombos = [
    [0,1,2],[3,4,5],[6,7,8], //for rows win
    [0,3,6],[1,4,7],[2,5,8], //for colunms win
    [0,4,8],[2,4,6] //for diagonals win
   ];
  
   //Loop throuh each possible winning combination
   for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    var cell1 = cells.eq(combo[0]);
    var cell2 = cells.eq(combo[1]); 
    var cell3 = cells.eq(combo[2]);
    
    //If all three cells in the current combination are marked with the same player's symbol (❌ or ⭕), that player has won
    if (cell1.text() == player && cell2.text() == player && cell3.text() == player) {
      return $("h1").text("Player " + player + " wins!");
    } else if (cell1.text() == computer && cell2.text() == computer && cell3.text() == computer ){
      return $("h1").text("Player " + computer + " wins!");
    }
    }

// if there are no empty cells left, the game is over
 emptyCells = $(".cell").filter(function() {
      return $(this).text() === "";
    });

    if (emptyCells.length === 0) {
     return $("h1").text("It ended Draw!");
    }
    

//If no winner has been determined yet, return null
return null; 
}
  //To reset the game
  function resetGame (){
    player = "❌";
    computer = "⭕";
    turns = 0;
    $(".cell").text("");
    $("h1").text("Start the game by clicking any of the cell!");
   }




