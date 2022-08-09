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
// create function for event listeners
const placeToken = function (  ){

    // let contents = $(this).html()
    // console.log(contents);
    // check if clicked square is free with no existing HTML
    if ($(this).html() === '') {
        console.log('free');  
        // if (this).html() === '') true, run following
        
        // check is variable true, true
        if (playerX === true) {
            
             $(this).html('X') 
             // if so, make square x
             playerX = false
             // if false, run else
        } else {
            
            $(this).html('O') 
            // if so, place o
            playerX = true
            // change o back to x
        } // closes else

    } // closes free square check




};
// click functions for each box
$('.cell').on('click', placeToken);




$('.newgame').on('click', function(){
    console.log('you clicked new game');
    $('.cell').html('');
});

$('.playerx').on('click', function(){
    console.log('you chose player x');
    // $('body').text('You chose Player X')
});

$('.playero').on('click', function(){
    console.log('you chose player o');
    // $('body').text('You chose Player O')
});


// how do i store a winning combo --> arrays to store combos
// const winningCombinations = [
//     ['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8'],['2','4','6'],
// ]
// run loop function through array to detect winning combos

// store winning combos without a simpler array
const winningCombos = [

    winCombo0 = ['0','1','2'],
    winCombo1 = ['3','4','5'],
    winCombo2 = ['6','7','8'],
    winCombo3 = ['0','3','6'],
    winCombo4 = ['1','4','7'],
    winCombo5 = ['2','5','8'],
    winCombo6 = ['0','4','8'],
    winCombo7 = ['2','4','6'],
    
];

// write function to check winning combos
// incorporate playerX or playerO wins, or It's a draw - press new game
const checkWin = function(){


};






// };
// $(winningCombinations).each([ , ], function( index, value ) {
//     console.log( );
//   });


// Once happy with game functioning, add celebration animation once game complete, and reset/clear with 'New Game' button
