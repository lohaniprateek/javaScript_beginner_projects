let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level =0;

$(document).keypress(function(){
  if (!started) {
    $("#level-title").html( "Level " + level);
    nextSequece();
    started = true;
  }
});

$(".btn").on("click", function () {
  let userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  
  playSounds(userChosenColour);
  let currentColour = userChosenColour;
  animatePrees(currentColour);


  checkAnswer(userClickedPattern.length-1)
});

function nextSequece() {
  userClickedPattern =[];

  $("#level-title").html( "Level " + level++);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  
  $("#" + randomChosenColour).fadeTo(100, 0.3, function () {
    $(this).fadeTo(500, 1.0);
    playSounds(randomChosenColour);
  });
}




function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if(userClickedPattern.length === gamePattern.length){
      setTimeout(() => {
        nextSequece();
      }, 1000);
    }
  }
  else {
    $("#level-title").html("Game Over, Press Any Key to Restart");
    playSounds("wrong");
    $(body).addClass("game-over")
    setTimeout(() => {
      $(body).removeClass("game-over");
    }, 200);

    startOver();
  }
  
}

function playSounds(randomChosenColour) {
  switch (randomChosenColour) {
    case "red":
      let audio = new Audio("./sounds/red.mp3");
      audio.play();
      break;
    case "blue":
      let audio1 = new Audio("./sounds/blue.mp3");
      audio1.play();
      break;
    case "green":
      let audio2 = new Audio("./sounds/green.mp3");
      audio2.play();
      break;
    case "yellow":
      let audio3 = new Audio("./sounds/yellow.mp3");
      audio3.play();
      break;
      case "wrong":
        let audio4 = new Audio("./sounds/wrong.mp3");
        audio4.play();
        break;
  }
}


function animatePrees(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(() => {
  $("#" + currentColour).removeClass("pressed");
}, 100);
};

function startOver(){
level = 0;
gamePattern = [];
started = false;
}