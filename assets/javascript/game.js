//Javascript for The Crystal Game - Week 4 Homework Assignment - Due 10.27.18

//page loads before running script
$(document).ready(function() {

    //set up Variables
    var targetNumber = "";
    var wins = 0;
    var losses = 0;
    var yourTotal = 0;
    
    var images = ["assets/images/blue1PNG.png", "assets/images/greenPNG.png", "assets/images/redPNG.png", "assets/images/yellowPNG.png"]
    
    //set up Functions
     
    //generates random target number 
    function randomTargetNumber () {
        targetNumber = Math.floor(Math.random() * 102) + 19;
    }
    
    //loop function to assign a random numbers for the crystals
    //for Loop to set up Crystals with random number assignment. Uses JQuery to assign attributes to the images & appends images to the parent Div of "crystalImages-Box"
    
    function randomCrystalNumbers () {
        for (var i = 0; i < images.length; i++) {
            var crystal = $("<img>");
            crystal.addClass("crystalJPG");
            crystal.attr("src", images[i]);
            crystal.attr("value", (Math.floor(Math.random() * 12) +1));
            $(".crystalImages-box").append(crystal);
            //crystal.attr("height", "100"); <--moved this line of code over to CSS stylesheet
        }
    }
    //function to update html with totals. Also, clears the crystal images so they don't duplicate (randomCrystalNumbers function generates a new set of crystals each time it's invoked)
    function updateStats () {
        $(".targetNumber-box").html(targetNumber);
        $(".wins-box").html("<p>Wins: " + wins + "</p>");
        $(".losses-box").html("<p>Losses: " + losses + "</p>");
        $(".yourTotal-box").html(yourTotal);
        $(".crystalImages-box").empty()
    }
    
    // Game reset
    function gameReset () {
        randomTargetNumber ();
        yourTotal = 0;
        updateStats ();
        randomCrystalNumbers ();
        
        
    }
    
    
    //call/invoke functions to start game
    randomTargetNumber ();
    updateStats ();
    randomCrystalNumbers ();
    
    
    //User Click Crystal, adds to yourTotal, logic to check state of game and functions accordingly
    
    function crystalClick () {
        yourTotal += parseInt($(this).attr("value"));
        $(".yourTotal-box").html(yourTotal);
        if (yourTotal === targetNumber) {
            wins++;
            gameReset();
        }
        else if (yourTotal > targetNumber) {
            losses++;
            gameReset();
        };
    };
    //on-click event listener, executes crystalClick function
    $(document).on("click", ".crystalJPG", crystalClick);
    });