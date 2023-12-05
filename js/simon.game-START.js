// Simon Game: get the 4 buttons in simon-container into an array (Node List)

// a boolean to keep track of whether game is in play

// an array to store sequence of randomly served buttons

// keep track of user button clicks to compare to sequence index

// get the h2 for providing feedback

// make each button clickable, on click log id of the button, which is the color

    // check if this is the correct btn; does it "line up" w btnSequence
    // user clicked correct btn
        // increment clicks w each user btn click
        // play sound w each btn click 
        
        // if user clicks entire sequence correctly, serve new btn:
        
    // Game Over: user clicked wrong button (not in correct sequence)
        
        // 'GAME OVER! Press any key to play again.'
        // NEW GAME RESET:
        // reset the sequence for a new game
        // reset boolean so that 'keydown' starts new game

// have document listen for keydown and run function when that occurs
// function needs to start the game -- keydown should only work once per game

        // 'GAME ON!';

// define the serveBtn() function that generates a random button flash

    // 1.0 sec delay then rand btn vanishes

        // play sound that goes with that button:
     
    // 1000
    // 0.6 sec later, button reappears
    
    // save the color of the served btn to the btnSequence arr:
    // btn.id = 'green' etc.
    // user's turn to try to replicate sequence, so reset clicks
    
// } end serveBtn() func
















