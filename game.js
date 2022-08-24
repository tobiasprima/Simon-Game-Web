var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var buttonColours = ["red", "blue", "green", "yellow"];

$(document).one("keydown", function (e) {
    var keyPressed = e.key;
    if (keyPressed = "a") {
        nextSequence();
    }

});
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level " + level);

}


$(".btn").click(function (e) {
    var userChosenColour = (e.currentTarget.id);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () { $("#" + currentColour).removeClass("pressed"); }, 100);
}