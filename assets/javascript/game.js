$(document).ready(function() {
    // declaring variables
    var wins = 0;
    var losses = 0;
    var userTotal = 0;
    var pointsEarned = 0;

    function tallyScore (value) {
        pointsEarned += value ;
        $(".points").text(pointsEarned);
        checkScore();
    }

    function checkScore () {
        if (Random === pointsEarned) {
            winner();
        }
        else if (pointsEarned > Random){
            loser();     
       }
    }
    // Random number between 10(target score)
    var Random = Math.floor(Math.random()*101+19);
    $(".randomNumber").text(Random);
    $(".points").text(pointsEarned);
    //Random numbers for each crystal
    var blue = Math.floor(Math.random()*10+1);
    var green = Math.floor(Math.random()*10+1);
    var red = Math.floor(Math.random()*10+1);
    var orange = Math.floor(Math.random()*10+1);

    $("win").text(wins);
    $("loss").text(losses);

    // click events
    $(".blueCrystal").on("click", function() {
        // console.log("hello World");
        tallyScore(blue);
    });
    
    $(".greenCrystal").on("click", function() {
        // console.log("hello World");
        tallyScore(green);
    });

    $(".redCrystal").on("click", function() {
        // console.log("hello World");
        tallyScore(red);
    });

    $(".orangeCrystal").on("click", function() {
        // console.log("hello World");
        tallyScore(orange);
    });


    // Reset the game
    function reset(){
        // console.log("hello world");
        Random=Math.floor(Math.random()*101+19);
        $(".randomNumber").text(Random);
        blue= Math.floor(Math.random()*10+1);
        green= Math.floor(Math.random()*10+1);
        red= Math.floor(Math.random()*10+1);
        orange= Math.floor(Math.random()*10+1);
        pointsEarned = 0
        $(".points").text(pointsEarned);
    }

    // add wins
    function winner(){
        alert("You Won");
        wins++;
        $('#win').text(wins);
        reset();
    }

        // add losses
    function loser(){
        alert("You Lose! Try Again");
        losses++;
        $('#loss').text(losses);
        reset();
    }

   
})