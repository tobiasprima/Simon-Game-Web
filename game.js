var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColours[randomNumber];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
}

gamePattern.push(randomChosenColour);