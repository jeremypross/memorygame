document.addEventListener('DOMContentLoaded', function(){
  console.log('js is linked');

  // create deck with 8 matching pairs
  var cardValues = ['2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9'];

// function to randomize card order
// credit:  - fisher yates shuffle (Source #2 in readme.md) (http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

  function shuffle(arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining array element...
      // makes random number based on the array length
      // will find random number between 0 and length
      randomIndex = Math.floor(Math.random() * currentIndex);
      // works way down through array, from last value until it reaches 0
      // minuses current index by 1
      currentIndex -= 1;

      // And swap it with the current element.
      // eliminates need for push(); and pop();
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return cardValues;
  }


// function to create divs for each of the array values, and then append each of these divs to the game board.
  var createDeck = function(){
    shuffle(cardValues);
    var playingcards = document.createElement('div');
    var cardDiv = document.getElementsByClassName('card');
    cardDiv.forEach(function(card){
      playingCards.innerHTML = '<div>' + card[i].value + '<div>';
      cardDiv.appendChild(playingcards);
    });
  };

  // iterate through the array
  // and then concatenate strings from the values
  // for (x=0;x<array.length; x++){
  // '<div>'+values+




  //
  // var createBoard = function(){
  //   var cards = document.querySelectorAll('cards');
  //   values.forEach(function(playingcard){
  //     var newCards = document.createElement('');
  //     cards.innerHTML = playingcard;
  //     cards.appendChild()
  //   })
  // }


// append cards to board


// function for card flip - class change
  // have two classes - one for flipped over, one for a match


// click event listener for
// if else statement to determine whether the cards stay flipped or flip back over


// function for counter
  // if there are no cards left then the count is stored



});
