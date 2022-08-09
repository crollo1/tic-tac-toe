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
    
    // check if clicked square is free with no existing HTML
    if ($(this).html() === '') {
        console.log('free');  
        // if (this).html() === '') true, run following
        
        // check is the variable true
        if (playerX === true) {
            
             $(this).html('X') 
             // if so, make square x
             checkForWin();
             // run check for win function
             playerX = false
             // if false, run else
        } else {
            
            $(this).html('O') 
            // if so, make square o
            checkForWin();
             // run check for win function
            playerX = true
            // change o back to x

        } // closes else

    } // closes check for free square


}; // closes placeToken


$('.cell').on('click', placeToken); // click functions for each box

$('.newgame').on('click', function(){
    console.log('you clicked new game');
    $('.cell').html(''); // click function to clear game
});

$('.playerx').on('click', function(){
    console.log('you chose player x');
    playerX = true; // if clicked, player X has been selected
});

$('.playero').on('click', function(){
    console.log('you chose player o');
    playerX = false; // if clicked, player O has been selected
});


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

    if (pos0 === 'X' && pos1 === 'X' && pos2 === 'X' ){
       console.log('player x wins');
    } else if (pos0 === 'O' && pos1 === 'O' && pos2 === 'O' ){
        console.log('player o wins');
    } else if (pos3 === 'X' && pos4 === 'X' && pos5 === 'X' ){
       console.log('player x wins');
        
    } else if (pos3 === 'O' && pos4 === 'O' && pos5 === 'O' ){
        console.log('player o wins');
        
    } else if (pos6 === 'X' && pos7 === 'X' && pos8 === 'X' ){
       console.log('player x wins');
        
    } else if (pos6 === 'O' && pos7 === 'O' && pos8 === 'O' ){
        console.log('player o wins');
        
    } else if (pos0 === 'X' && pos3 === 'X' && pos6 === 'X' ){
       console.log('player x wins');
        
    } else if (pos0 === 'O' && pos3 === 'O' && pos6 === 'O' ){
        console.log('player o wins');
        
    } else if (pos1 === 'X' && pos4 === 'X' && pos7 === 'X' ){
       console.log('player x wins');
        
    } else if (pos1 === 'O' && pos4 === 'O' && pos7 === 'O' ){
        console.log('player o wins');
        
    } else if (pos2 === 'X' && pos5 === 'X' && pos8 === 'X' ){
       console.log('player x wins');
        
    } else if (pos2 === 'O' && pos5 === 'O' && pos8 === 'O' ){
        console.log('player o wins');
        
    } else if (pos0 === 'X' && pos4 === 'X' && pos8 === 'X' ){
       console.log('player x wins');
        
    } else if (pos0 === 'O' && pos4 === 'O' && pos8 === 'O' ){
        console.log('player o wins');
        
    } else if (pos2 === 'X' && pos4 === 'X' && pos6 === 'X' ){
       console.log('player x wins');
        
    } else if (pos2 === 'O' && pos4 === 'O' && pos6 === 'O' ){
        console.log('player o wins');

    }; 

    
    
}; // closes winningCombos  

// incorporate 'It's a draw - press new game'

// Once happy with game functioning, add celebration animation once game complete

// add sliding animation to choose your player - CSS???

// maybe change mouse to pointer??






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

