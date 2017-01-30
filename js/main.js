document.addEventListener('DOMContentLoaded', function(){

  // create deck with 8 matching pairs
  var cardValues = ['2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9'];

  var counter = 0;

  var score = 0;

  // function to randomize card order
  // credit: fisher yates algorithm (Source #2 in readme.md) (http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) & (https://bost.ocks.org/mike/shuffle/)
  var shuffle = function(arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining array element:
      // makes random number based on the array length
      // will find random number between 0 and length
      randomIndex = Math.floor(Math.random() * currentIndex);
      // works way down through array, from last value until it reaches 0
      currentIndex -= 1;
      // And swap it with the current element (eliminates need for push(); and pop();)
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return arr;
  }
  // checking work
  console.log(shuffle(cardValues));



  // function - iterate through the array, and then give each div the value of the the array value.
  var createDeck = function(){
    // create empty string that has full scope of createDeck function
    cardValues.forEach(function(card){
      // change value of empty string
      var newText = '';
      newText += '<div class=\'card-container\'>'+'<div class=\'card\'>'+'<div class=\'face front cardfront\'>'+'</div>'+'<div class=\'face back cardback\'>'+ card +'</div>'+'</div>'+'</div>';
      // create a variable for container element
      var container = document.getElementById('container');
      // place array of strings into container element
      // use += operator to add each string in loop - not just last one
      container.innerHTML += newText;
    });
  };
  createDeck();

  // ====================

  // write a call back function for if match event target
    // where event target visibility is hidden




  var clicked = document.getElementsByClassName('clicked');

  for (var x=0; x<clicked.length; x++) {
    clicked[x].addEventListener('click', hideMatches, false);
  }

  // only implementing when you've looped through once already
  // the rule is only implemented after you've made the match
  // write this function in the form of a call back function that is outside the click event
  // that you can call once you have a match

  // ====================

  // variable for front of card - for click event
  var frontOfCard = document.querySelectorAll('.front');
  // variable for back of card
  var backOfCard  = document.querySelectorAll('.back');
  // create holder array for card values
  var valuesArray = [];

  var gameScore = document.getElementById('score');


  // for each loop to toggle card classes when there is a click event
  frontOfCard.forEach(function(card) {
    card.addEventListener('click', function(event) {
      // toggle class back
      card.nextSibling.classList.toggle('back');
      card.nextSibling.classList.add('clicked');
      // toggle class front
      card.classList.toggle('front');

      // add class to clicked cards
      card.classList.add('clicked');

      // increase click counter by 1
      counter +=1;
      console.log(counter);
      // get the value of the clicked card
      var playingCardValue = card.nextSibling.innerHTML;
      console.log(playingCardValue);
      // push each click value into the array
      valuesArray.push(parseInt(playingCardValue));
      console.log(valuesArray);

      function hideMatches(event) {
        var match = event.target;
      }
      console.log(event.target);

      // GAME LOGIC
      // if there are two values in the array
      if (valuesArray.length ===2) {
        // IF MATCH
        if (valuesArray[0] === valuesArray[1]) {
          // increase points by 1
          score ++; // WORKS
          console.log(score);
          // alert = you have a match!
          alert(`You found a match! Your match count is ${score} of 8!`); // WORKS
          // increase game score
          gameScore.innerHTML = `${score} out of 8!`;
          // reset counter to zero
          counter = 0; // WORKS
          console.log(counter);
          // empty array
          valuesArray = []; // WORKS
          console.log(valuesArray);

          // TAKE CARDS OFF BOARD
          hideMatches();

        } else {
          // IF NO MATCH
          // timeout so user will see both cards
          setTimeout(function() {

            // flip cards back over
            var clickedCardFront = document.querySelectorAll('.cardfront');
              clickedCardFront.forEach(function(cards){
                cards.classList.add('front');
                cards.classList.remove('clicked');
              });

            var clickedCardBack= document.querySelectorAll('.cardback');
              clickedCardBack.forEach(function(cards){
                cards.classList.add('back');
                cards.classList.remove('clicked');
              });

            // alert try again
            alert('Try again!'); // WORKS
            // reset counter
            counter = 0; // WORKS
            console.log(counter);
            // empty array
            valuesArray = []; // WORKS
            console.log(valuesArray);

          }, 750);
        }
      } // else - do nothing - default


    }); // click event
  }); // forEach loop




});
