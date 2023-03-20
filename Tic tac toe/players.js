var currentPlayer = "❌";
var turns = 0;

$(".cell").click(function() {
// check if the cell has already been clicked or if the game is over
   if ($(this).text() !== "" || checkWin()) {
     return;
   }
   
// update the cell with the current player's mark
   $(this).text(currentPlayer).addClass("times");
   
   if (checkWin()) {
    $("h1").text("Player " + currentPlayer + " wins!");
    
    setTimeout(function () {
      resetGame ();
    }, 1500);

   }

// check if the game it's a tie
   else if (turns == 8) {
    $("h1").text("It ended Draw!");
    setTimeout(function () {
      resetGame ();
    }, 1500); 
   } 
   
   else {
// toggle the current player    
currentPlayer = (currentPlayer === "❌") ? "⭕" : "❌";

 if (currentPlayer === "❌") {
  $("h1").text("It's ❌ turn!");
} else {
  $("h1").text("It's ⭕ turn!");
}

turns++; 
}   
});

  
 function checkWin() {
// check for wins in the game
 var cells = $(".cell");
 var winningCombos = [
  [0,1,2],[3,4,5],[6,7,8], //for rows win
  [0,3,6],[1,4,7],[2,5,8], //for colunms win
  [0,4,8],[2,4,6] //for diagonals win
 ];

 for (var i = 0; i < winningCombos.length; i++) {
  var combo = winningCombos[i];
  if (cells.eq(combo[0]).text() == currentPlayer &&
      cells.eq(combo[1]).text() == currentPlayer && 
      cells.eq(combo[2]).text() == currentPlayer) {
    return true;
  }
}
 return false; 
  }
  
//To reset the game
 function resetGame (){
  currentPlayer = "❌";
  turns = 0;
  $(".cell").text("");
  $("h1").text("Start the game by clicking any of the cell!");

 }
 




