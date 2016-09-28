//=================================================================
// Variable Declaration
var d = []; // the computers three numbers
var currentGuess = 1; // counts up from 1 to 10, helps place row.
var g = [0, 1, 2]; // triplet
var winOrLose;
var exactmatch = "panel-success";
var numbermatch = "panel-warning";
var nomatch = "panel-danger";
var newline;
var replay;
// -------------------------------------------------
$(document).ready(function(){
  d = computerGuess();
  readyAlert();
  console.log(d);
  submitListener();
});
//--------------------------
// Function definitions
computerGuess = function(){
 var digitOne = Math.floor(Math.random()*10);
 var digitTwo;
 var digitThree;
 do {
   digitTwo = Math.floor(Math.random()*10);
 } while (digitTwo == digitOne);
do {
   digitThree = Math.floor(Math.random()*10);  
} while (digitThree == digitOne || digitThree == digitTwo);
 return [digitOne, digitTwo, digitThree];
}
readyAlert = function(){
  alert("I have three numbers in mind, care to guess?");
}
submitListener = function() {
  $("#process").click(function() {
    lineFill();
  });
}
lineFill = function(){
  if (currentGuess <= 10 ) {
    var guessOne = $("#fDigit").val();
    var guessTwo = $("#sDigit").val();
    var guessThree = $("#tDigit").val();
    g = [guessOne, guessTwo, guessThree];
    newline = $("#rowmaker").html();
    newline = newline.replace("@@num@@", currentGuess);
    newline = newline.replace("@@first@@", g[0]);
    newline = newline.replace("@@second@@", g[1]);
    newline = newline.replace("@@third@@", g[2]); 
    if (g[0] == d[0]) {
      newline = newline.replace("@@match1@@", exactmatch);
      newline = newline.replace("@@desc1@@", "Match !!!!");
    } else if (g[0] == d[1] || g[0] == d[2]) {
      newline = newline.replace("@@match1@@", numbermatch);
      newline = newline.replace("@@desc1@@", "It's Close!");
    } else {
      newline = newline.replace("@@match1@@", nomatch);
      newline = newline.replace("@@desc1@@", "No Match");
    }
    if (g[1] == d[1]) {
      newline = newline.replace("@@match2@@", exactmatch);
      newline = newline.replace("@@desc2@@", "Match !!!!");
    } else if (g[1] == d[0] || g[1] == d[2]) {
      newline = newline.replace("@@match2@@", numbermatch);
      newline = newline.replace("@@desc2@@", "It's Close!");
    } else {
      newline = newline.replace("@@match2@@", nomatch);
      newline = newline.replace("@@desc2@@", "No Match");
    }
    if (g[2] == d[2]) {
      newline = newline.replace("@@match3@@", exactmatch);
      newline = newline.replace("@@desc3@@", "Match !!!!");
    } else if (g[2] == d[0] || g[2] == d[1]) {
      newline = newline.replace("@@match3@@", numbermatch);
      newline = newline.replace("@@desc3@@", "It's Close!");
    } else {
      newline = newline.replace("@@match3@@", nomatch);
      newline = newline.replace("@@desc3@@", "No Match");
    }      
    $(".container").append(newline);
  }
  return;
}
gameEnd = function(){
  console.log("gameEnd did fire");
  if (g[0] == d[0] && g[1] == d[1] && g[2] == d[2]) {
    winOrLose = true;
    return true;
  } else {
    currentGuess++; 
    $("#remaining").html(11 - currentGuess);
    if (currentGuess > 10) {
      winOrLose = false;
      return true;
    }
  }
}
gameEndAlert = function(didWin){
  if (didWin) {
    alert("You've figured it out");
  } else {
    alert("You'll never beat me");
    //reveal the number
  }
    playAgain(); 
}
playAgain = function(){
  replay = prompt("Would you like to play again?");
  if (replay[0].toUpperCase() == "Y") {
    location.reload();
  }
}