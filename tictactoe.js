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


    let playerXTurn = true;
    $('#box1').on('click', function(){
    console.log('you clicked box1');
    $('#box1').html('X') 
    });

    $('#box2').on('click', function(){
        console.log('you clicked box2');
    });
    
    $('#box3').on('click', function(){
        console.log('you clicked box3');
    });

    $('#box4').on('click', function(){
        console.log('you clicked box4');
    });

    $('#box5').on('click', function(){
        console.log('you clicked box5');
    });

    $('#box6').on('click', function(){
        console.log('you clicked box6');
    });

    $('#box7').on('click', function(){
        console.log('you clicked box7');
    });

    $('#box8').on('click', function(){
        console.log('you clicked box8');
    });

    $('#box9').on('click', function(){
        console.log('you clicked box9');
    });

    $('.playerx').on('click', function(){
        console.log('you clicked player x');
    });

    $('.playero').on('click', function(){
        console.log('you clicked player o');
    });

    $('.newgame').on('click', function(){
        console.log('you clicked new game');
    });

};
// how do we get X and O to show on the board
// create a function for gameBegin, starting player X
gameBegin();

 // end gameBegin


// work out how to incorporate X and O for alternate clicks

// how do i then detect a winning combo --> arrays to store combos
const winningCombinations = [
    ['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7'],
]

// write a loop to check through?

// how do i know what is already in the squares, and if it's already occupied


