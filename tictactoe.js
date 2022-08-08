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

// use event listeners for click functions i.e. detecting click on each square. // each box will need an event listener.
const placeToken = function(){

};

let playerXTurn = true;

$('#0').on('click', function(){
    console.log('you clicked 0');
    $('#0').html('O')
});

$('#1').on('click', function(){
console.log('you clicked 1');
$('#1').html('X') 
});

$('#2').on('click', function(){
    console.log('you clicked 2');
    $('#2').html('O')
});

$('#3').on('click', function(){
    console.log('you clicked 3');
    $('#3').html('X')
});

$('#4').on('click', function(){
    console.log('you clicked 4');
    $('#4').html('O')
});

$('#5').on('click', function(){
    console.log('you clicked 5');
    $('#5').html('X')
});

$('#6').on('click', function(){
    console.log('you clicked 6');
    $('#6').html('O')
});

$('#7').on('click', function(){
    console.log('you clicked 7');
    $('#7').html('X')
});

$('#8').on('click', function(){
    console.log('you clicked 8');
    $('#8').html('O')
});


$('.playerx').on('click', function(){
    console.log('you clicked player x');
});

$('.playero').on('click', function(){
    console.log('you clicked player o');
});

$('.newgame').on('click', function(){
    console.log('you clicked new game');
    $('.cell').html('');
});


// how do we get X and O to show on the board
// create a function for gameBegin, starting player X


 // end gameBegin


// work out how to incorporate X and O for alternate clicks

// how do i then detect a winning combo --> arrays to store combos
const winningCombinations = [
    ['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7'],
]

// write a loop to check through?

// how do i know what is already in the squares, and if it's already occupied


