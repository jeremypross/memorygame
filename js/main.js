document.addEventListener('DOMContentLoaded', function(){

  console.log('js is linked');

  // create deck with 8 matching pairs
  var cardValues = ['2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9'];

  var counter = 0;

  var score = 0;

  // function to randomize card order
  // credit: fisher yates shuffle (Source #2 in readme.md) (http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) & (https://bost.ocks.org/mike/shuffle/)
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
      newText += '<div class=\'col\'>'+'<div class=\'card-container\'>'+'<div class=\'card\'>'+'<div class=\'face front\'>'+'<img src =\'img/cardback.jpg\' />' + '</div>' +'<div class=\'face back\'>'+'<div class=\'cardvalue\'>'+ card +'</div>'+'</div>'+'</div>'+'</div>'+'</div>';
      // create a variable for container element
      var container = document.getElementById('container');
      // place array of strings into container element
      // use += operator to add each string in loop - not just last one
      container.innerHTML += newText;
      // check work
      // console.log(newText);
    });
  };
  createDeck();



  // variable for front of card - for click event
  var frontOfCard = document.querySelectorAll('.face.front');
  // variable for images
  var frontImage  = document.querySelectorAll('img');
  // variable for back of card
  var backOfCard  = document.querySelectorAll('.face.back');
  // create holder array for card values
  var valuesArray = [];

  // for each loop to toggle card classes when there is a click event
  frontOfCard.forEach(function(card) {
    card.addEventListener('click', function(event) {
      // toggle class back
      card.nextSibling.classList.toggle('back');
      // toggle class front
      card.classList.toggle('front');
      // for each loop to turn off front image on cards
      frontImage.forEach(function(image){
        image.style.display ='none';
      });

      // increase click counter by 1
      counter +=1;
      console.log(counter);

      // get the value of the clicked card
      var playingCardValue = card.nextSibling.firstChild.innerHTML;
      console.log(playingCardValue);

      // push each click value into the array
      valuesArray.push(parseInt(playingCardValue));
      // helper - checks array
      console.log(valuesArray);

        // GAME LOGIC
        // if there are two values in the array
        if (valuesArray.length ===2){
          // if value1 = value 2
          if (valuesArray[0] === valuesArray[1]) {
            // alert = you have a match!
            alert('You have a match!'); // WORKS
            // increase points by 1
            score ++; // WORKS
            console.log(score);
            // reset counter to zero
            counter = 0; // WORKS
            console.log(counter);
            // empty array
            valuesArray = []; // WORKS
            console.log(valuesArray);

            // take cards off board
            var removeCards = function(){
              document.getElementsByClassName('.face')
              .setAttribute('style', 'display: none')
            };
            removeCards();

          } else {
            // alert try again
            alert('Try again!'); // WORKS

            // flip cards back over


            // reset counter
            counter = 0; // WORKS
            console.log(counter);
            // empty array
            valuesArray = []; // WORKS
            console.log(valuesArray);
          }


        // else - do nothing - default
      } else {

      }

    });
  });


});
