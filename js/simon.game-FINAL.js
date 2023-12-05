// Simon Game: get the 4 buttons in simon-container into an array (Node List)
const btns = document.querySelectorAll('.simon-container button');
let playing = false; // a boolean to keep track of whether game is in play
let sequence = []; // an array to store sequence of randomly served buttons
let clicks = 0; // keep track of user button clicks to compare to sequence index
const h2 = document.querySelector('h2'); // get the h2 for providing feedback

// make each button clickable, on click log id of the button, which is the color
btns.forEach(b => b.addEventListener('click', () => {
    // check if this is the correct btn; does it "line up" w btnSequence
    if(b.id == sequence[clicks]) { // user clicked correct btn
        clicks++; // increment clicks w each user btn click
        new Audio(`audio/${b.id}.mp3`).play(); // play sound w each btn click 
        h2.textContent = 'Good! Keep it going! ' + clicks;
        // if user clicks entire sequence correctly, serve new btn:
        if(clicks == sequence.length) serveBtn();
    } else { // Game Over: user clicked wrong button (not in correct sequence)
        new Audio('audio/sat-on-the-cat.mp3').play();
        h2.textContent = 'GAME OVER! Press any key to play again.';
        // NEW GAME RESET:
        sequence = []; // reset the sequence for a new game
        playing = false; // reset boolean so that 'keydown' starts new game
    }
}));

document.addEventListener('keydown', () => {
    if(!playing) serveBtn();
    playing = true;
    h2.textContent = 'GAME ON!';
});

function serveBtn() {
    let r = Math.floor(Math.random() * btns.length); // 0-3
    const b = btns[r];
    // 1.0 sec delay then rand btn vanishes
    setTimeout(() => {
        b.style.opacity = "0";
        new Audio(`audio/${b.id}.mp3`).play();
    }, 1000);
    // 0.6 sec later, button reappears
    setTimeout(() => b.style.opacity = "1", 1600);
    // save the color of the served btn to the btnSequence arr:
    sequence.push(b.id); // btn.id = 'green' etc.
    clicks = 0; // user's turn to try to replicate sequence, so reset clicks
}
















