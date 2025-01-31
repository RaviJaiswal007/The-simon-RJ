let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let started = false;

// will generate a next squence
function nextSequence() {


    let randomNumber = Math.floor(Math.random() * 4);

    //step 5
    let randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);  

    // animate the button which is in sequence
    $("#" + randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChoosenColour);



    //increasing and displaying the current level
    level++;
    $("#level-title").text("Level " + level)


     
    //Reset the userClicked pattern after each level
    userClickedPattern = [];

    
}

//to detect any of the button is clicked
$(".btn").click(function () {
    let userChoosenColour = $(this).attr("id");
    userClickedPattern.push(userChoosenColour); //Adding the userchoosen colour to the userClickedPattern 

    playSound(userChoosenColour); 
    animatePress(userChoosenColour);
    console.log(userClickedPattern);

    
    checkAnswer(userClickedPattern.length - 1)

});

//start the game on key press
$(document).on("keypress", function () {
     if (!started) { //when the game hasn't started calling the nextsequence 
        nextSequence();
    }
    started = true;
    console.log("game has started");
});


function playSound(name) {
    let music = new Audio("./sounds/" + name + ".mp3");
    music.play();
    // console.log(name);
}

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(() => {
        $("." + currentColour).removeClass("pressed");
    }, 100);

}

function checkAnswer(currentLevel) {
    // if (gamePattern[currentLevel] === userClickedPattern.pop)
        if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
            console.log("True");
           if(gamePattern.length === userClickedPattern.length){
                setTimeout(() => {
                    nextSequence();
                }, 1000);
           }
        }else{
            console.log("False");
            playSound("wrong");
            $("body").addClass("game-over");

            setTimeout(() => {
                $("body").removeClass("game-over");
            }, 200);

            $("#level-title").text("Game Over, Press Any Key to Restart");

            startOver();

            console.log ( level + "," + gamePattern + "," + started)
        }
        

}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
