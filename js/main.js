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
      // works way down through array by decreasing current index by 1
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
      console.log(newText);
    });
  };
  createDeck();



  // variable for front of card - for click event
  var frontOfCard = document.querySelectorAll('.face.front');
  // variable for images
  var frontImage  = document.querySelectorAll('img');
  // variable for back of card
  var backOfCard  = document.querySelectorAll('.face.back');

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

      // TAKE VARIABLE AND PASS IT THROUGH AN ARRAY

      // create holder array for card values
      var valuesArray =[];

      // push card values into array
      valuesArray.push(playingCardValue);

      console.log(valuesArray);

      // push a value each time there is a click

      // THEN add game logic - once there are two values - then evaluate for matches


      // pass var value in an object - and then add logic to say;
      // on click i will save value
      // every second click i will reset counter to zero
      // and take storage object and empty
      // use that object to make conditional comparison
      // if / else statement - if you don't have else statement - do nothing - default

    });
  });


      // if counter = 1
      //   holderObject.firstValue = value;
      // if counter = 2
      //   holderObject.secondValue = value;
      //   if holderObject.first === holderObject.secondValue
      //     increase points by 1
      //     reset counter & holder object
      // alert you have a match!
      // take cards off board
      // else do nothing
        // alert please choose again
        // turn cards back over - toggle class front

});
