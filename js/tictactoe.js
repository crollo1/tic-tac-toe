console.log('I can do this!');


// Big Goals
// Build a web application from scratch, without a starter codebase
// Use your programming skills to map out the game logic for a simple game like Tic Tac Toe
// Separate HTML, CSS, and JavaScript files in your application
// Build an application to a spec that someone else gives you
// Build a dynamic game that allows two players to compete
// Write a README.md file that explains your app to the world

// Technical Requirements

// Your app must:

// Render a game board in the browser
// Switch turns between X and O (or whichever markers you select); your game should prevent users from playing a turn into a square that is already occupied
// Visually display which side won if a player gets three in a row; or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript with jQuery (or vanilla DOM methods if you really prefer) for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)


// PSUEDOCODE

// how do we get X and O to show on the board
// $('cell').html('insert X or O here');

// work out how to incorporate X and O for alternate clicks
// use event listeners for click functions i.e. detecting click on each square. // each box will need an event listener.

// debugger
let playerX = true;
let isGameActive = false; // prevent switch token half way through game
let moveCount = 0; // for use 
// create function for event listeners
const placeToken = function (  ){

    isGameActive = true;
    
    // check if clicked square is free with no existing HTML
    if ($(this).html() === '') {

        // if (this).html() === '') is true, run following
        
        // check is playerX the same as true
        if (playerX === true) {
            
             $(this).html('X'); 
             // if so, make square x
             checkForWin();
             // run check for win function
             playerX = false;
             // if false, run else
        } else {
            
            $(this).html('O'); 
            // if so, make square o
            checkForWin();
                //incrementing move count 
            playerX = true;
            // change o back to x
            
        } // closes else
        moveCount++; // incrementing square count

    } // closes check for free square
}; // closes placeToken

$('.cell').on('click', placeToken); // click function for each box

const winningMessage = function( position ){

    isGameActive = false;
    $('h2').html(`Player ${position} wins!`);
    $('img').show();

};

// write function to check winning combos
const checkForWin = function(){
    
    const pos0 = $('#0').html();
    const pos1 = $('#1').html();
    const pos2 = $('#2').html();
    const pos3 = $('#3').html();
    const pos4 = $('#4').html();
    const pos5 = $('#5').html();
    const pos6 = $('#6').html();
    const pos7 = $('#7').html();
    const pos8 = $('#8').html();

    if (pos0 === pos1 && pos0 === pos2 && pos0 !== '' 
        || pos3 === pos4 && pos3 === pos5 && pos3 !== '' 
        || pos6 === pos7 && pos6 === pos8 && pos6 !== '' 
        || pos0 === pos3 && pos0 === pos6 && pos0 !== '' 
        || pos1 === pos4 && pos1 === pos7 && pos1 !== '' 
        || pos2 === pos5 && pos2 === pos8 && pos2 !== '' 
        || pos0 === pos4 && pos0 === pos8 && pos0 !== '' 
        || pos2 === pos4 && pos2 === pos6 && pos2 !== '') { // 1st row

        winningMessage(  );
        
    // } else if (pos3 === pos4 && pos3 === pos5 && pos3 !== ''){ // 2nd row
        
    //     winningMessage(pos3);

    // } else if (pos6 === pos7 && pos6 === pos8 && pos6 !== ''){ // 3rd row
        
    //     winningMessage(pos6);

    // } else if (pos0 === pos3 && pos0 === pos6 && pos0 !== ''){// 1st column
        
    //     winningMessage(pos0);

    // } else if (pos1 === pos4 && pos1 === pos7 && pos1 !== ''){// 2nd column
        
    //     winningMessage(pos1);

    // } else if (pos2 === pos5 && pos2 === pos8 && pos2 !== ''){// 3rd column
        
    //     winningMessage(pos2);

    // } else if (pos0 === pos4 && pos0 === pos8 && pos0 !== ''){// left diag
        
    //     winningMessage(pos0);

    // } else if (pos2 === pos4 && pos2 === pos6 && pos2 !== ''){// right diag
        
    //     winningMessage(pos2);

    } else if (moveCount > 7){ 
        // if they are not empty, but no winning condition, its a draw
        isGameActive = false;
        $('h2').html(`It's a draw! Click new game`);
    } // closes if-else
    
    if (isGameActive === false) {
        
        $('h2').show();

    }; // closes if

}; // closes checkForWin 

$('.newgame').on('click', function(){

    isGameActive = false; 
    $('.cell').html(''), // click function to clear game
    $('p').fadeIn( 1000 ); // fade in 'p' text
    $('h2').fadeOut( 1000 ); // fades out h2 with reset
    $('img').hide(); // hides celebration gif
    moveCount = 0;
    
});

$('.playerx').on('click', function(){
    
    if (isGameActive === false){ 
        
        playerX = true; // if clicked, player X has been selected
        $('p').fadeOut( 1000 ); // fade out 'p' text

    };

});

$('.playero').on('click', function(){

    if (isGameActive === false){
       
        playerX = false; // if clicked, player O has been selected
        $('p').fadeOut( 1000 ); // fade out 'p' text

    };

});




// write winning messages for X and O and It's a draw, add celebration animation to winning messages



// DRY up code as much as possible







// store winning combos with a simpler array

// const winningCombos = [

//     winCombo0 = ['0','1','2'],

//     // for (let i = 0; i < array.length; i++) {
//     //     const element = array[i];
//     //     console.log();
           // }

//     winCombo1 = ['3','4','5'],
//     winCombo2 = ['6','7','8'],
//     winCombo3 = ['0','3','6'],
//     winCombo4 = ['1','4','7'],
//     winCombo5 = ['2','5','8'],
//     winCombo6 = ['0','4','8'],
//     winCombo7 = ['2','4','6']
    
// ]; // closes winningCombos

// how do i store a winning combo --> arrays to store combos
// const winningCombinations = [
//     ['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8'],['2','4','6'],
// ]
// run loop function through array to detect winning combos

