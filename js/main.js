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

      // GAME LOGIC
      // if there are two values in the array
      if (valuesArray.length ===2) {
        // if value1 = value 2
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

          // TAKE CARDS OFF BOARD - doesn't work
          // variable for clicked cards
          // var clickedCards = document.querySelectorAll('.clicked');
          //
          // clickedCards.forEach(function(each){
          //   each.style.display = 'none';
          //   // each.style.visibility = 'hidden';
          // });


        } else {

          // FLIP CARDS BACK OVER - doesn't work


          var clickedCardFront = document.querySelectorAll('.cardfront');

          clickedCardFront.forEach(function(cards){
            cards.classList.add('front');
          })

          var clickedCardBack= document.querySelectorAll('.cardback');

          clickedCardBack.forEach(function(cards){
            cards.classList.add('back');
          });



          // var click = document.getElementsByClassName('card');
          // var clickedFront = click.firstChild;
          // var clickedBack = clickedFront.nextSibling;
          //
          // clickedFront.forEach(function(cards){
          //   cards.classList.add = 'front';
          // });
          //
          // clickedBack.forEach(function(cardsTwo){
          //   cardsTwo.classList.add = 'back';
          // })



          // when you click
          // classes front and back toggled off / clicked added


          // alert try again
          alert('Try again!'); // WORKS
          // reset counter
          counter = 0; // WORKS
          console.log(counter);
          // empty array
          valuesArray = []; // WORKS
          console.log(valuesArray);
        }
      } // else - do nothing - default


    }); // click event
  }); // forEach loop




});
