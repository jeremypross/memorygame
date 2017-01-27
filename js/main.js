document.addEventListener('DOMContentLoaded', function(){

  console.log('js is linked');

  // create deck with 8 matching pairs
  var cardValues = ['2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9'];

// function to randomize card order
// credit: fisher yates shuffle (Source #2 in readme.md) (http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) & (https://bost.ocks.org/mike/shuffle/)

  var shuffle = function(arr) {
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
    return arr;
  }
  console.log(shuffle(cardValues));



// function - iterate through the array, and then give each div the value of the the array value.
  var createDeck = function(){
    cardValues.forEach(function(card){
      // create empty string
      var newText = '';
      // change value of empty string
      newText += '<div class=\'col\'>' +
                 '<div class=\'card-container\'>' +
                 '<div class=\'card\'>' +
                 '<div class=\'face front\'>' +
                 '<div class=\'frontside\'>' +
                 '<img src=\'img/cardback.jpg\' />' +
                 '</div>' +
                 '</div>' +
                 '<div class=\'face back\'>' +
                 //  adding array value here
                 '<div class=\'cardvalue\'>' + card + '</div>' +
                 '</div>'+'</div>'+'</div>'+'</div>';
      // check work
      console.log(newText);
      // create a variable for container element
      var container = document.getElementById('container');
      // place array of strings into container element
        // use += operator to add each string in loop - not just last one
      container.innerHTML += newText;
    });
  };
  createDeck();



// SECOND
// 1. write function to start game - which has series of conditional statements
// figure out how to keep track of clicks
// after two clicks if it does'nt match
// figure out how to reset it
// think ahead

// 1. html / game board
// 2. next is game logic
// design in a way to create business logic
// THIRD IS WORRYING ABOUT STYLING

  // check if match in click event, call back function to check if those are equal
  // then you need a mechanism to check if the two choices match


});
