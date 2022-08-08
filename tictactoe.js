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
let playerX = 0;
// create function for event listeners
const placeToken = function ( cell, player ){
    if (playerX === true) {
         $('.cell').html('X') 
         playerX === false
     } else {
      $('.cell').html('O') 
     }

};

$('#0').on('click', placeToken('#0', player));
$('#1').on('click', placeToken('#1', player));
$('#2').on('click', placeToken('#2', player));
$('#3').on('click', placeToken('#3', player));
$('#4').on('click', placeToken('#4', player));
$('#5').on('click', placeToken('#5', player));
$('#6').on('click', placeToken('#6', player));
$('#7').on('click', placeToken('#7', player));
$('#8').on('click', placeToken('#8', player));

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

// $('#0').on('click', function(){
//     console.log('you clicked 0');
//     $('#0').html('O')
// });

// $('#1').on('click', function(){
// console.log('you clicked 1');
// $('#1').html('X') 
// });

// $('#2').on('click', function(){
//     console.log('you clicked 2');
//     $('#2').html('O')
// });

// $('#3').on('click', function(){
//     console.log('you clicked 3');
//     $('#3').html('X')
// });

// $('#4').on('click', function(){
//     console.log('you clicked 4');
//     $('#4').html('O')
// });

// $('#5').on('click', function(){
//     console.log('you clicked 5');
//     $('#5').html('X')
// });

// $('#6').on('click', function(){
//     console.log('you clicked 6');
//     $('#6').html('O')
// });

// $('#7').on('click', function(){
//     console.log('you clicked 7');
//     $('#7').html('X')
// });

// $('#8').on('click', function(){
//     console.log('you clicked 8');
//     $('#8').html('O')
// });



// how do i store a winning combo --> arrays to store combos
const winningCombinations = [
    ['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8'],['2','4','6'],
]

$(winningCombinations).each([ , ], function( index, value ) {
    console.log( );
  });
// run loop function through array to detect winning combos
// can I in jQuery?


// how do i know what is already in the squares, and if it's already occupied

// Once happy with game functioning, add celebration animation once game complete, and reset/clear with 'New Game' button
