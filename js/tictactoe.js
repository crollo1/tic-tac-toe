// PSUEDOCODE

// how do we get X and O to show on the board
// $('cell').html('insert X or O here');

// work out how to incorporate X and O for alternate clicks
// use event listeners for click functions i.e. detecting click on each square. // each box will need an event listener.

// debugger
let currentPlayer = 'X'; 
let isGameActive = false; // prevent switch token half way through game
let moveCount = 0; // for move number 

// create function for event listeners
const placeToken = function (){

    isGameActive = true; // allows initial token selection 
    
    // check if clicked square is free with no existing HTML
    if ($(this).html() === '') {                            
        // is square empty, if true run following
        
        $(this).html( currentPlayer ); 
        checkForWin(); // needs to run before token change

        // check is currentPlayer X
        if ( currentPlayer === 'X') {
            // if not, current player is 'O', run else
             currentPlayer = 'O'; 
        } else {
            currentPlayer = 'X' // change o back to x
        } // closes else
        moveCount++; // increments total clicked square count

    } // closes check for free square
}; // closes placeToken

$('.cell').on('click', placeToken); // click function for each box

const winningMessage = function( position ){ 

    isGameActive = false;
    $('h2').html(`Congratulations, Player ${position} wins!`);
    $('.img1').show(500);

    
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
     || pos2 === pos4 && pos2 === pos6 && pos2 !== '') { 
            
        winningMessage( currentPlayer ); // last token placed = win
       
    } else if (moveCount > 7){ 
        // if they are not empty, but no winning condition, its a draw
        isGameActive = false;
        $('h2').html(`It's a draw! Click new game`);
    } // closes if-else
    
    if (isGameActive === false) { 
        
        // when game over, show winning message 
        $('h2').show();
        
    }; // closes if

}; // closes checkForWin 

$('.newgame').on('click', function(){

    isGameActive = false; 
    $('.cell').html(''), // click function to clear game
    $('p').fadeIn( 1000 ); // fade in 'p' text
    $('h2').fadeOut( 1000 ); // fades out h2 with reset
    $('.img1').hide(); // hides celebration gif
    $('.img2').show(); // shows cookie
    moveCount = 0;
    
});

$('.playerx').on('click', function(){
    
    if (isGameActive === false){ //checking if the game is active
        
        currentPlayer = 'X'; // if clicked, player X has been selected
        $('p').fadeOut( 800 ); // fade out 'p' text
        $('.img2').hide(); // hide cookie 

    };

});

$('.playero').on('click', function(){

    if (isGameActive === false){
       
        currentPlayer = 'O'; // if clicked, player O has been selected
        $('p').fadeOut( 800 ); // fade out 'p' text
        $('.img2').hide(); // hide cookie

    };

});









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

