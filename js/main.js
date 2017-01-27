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
    cardValues.forEach(function(card){
      // create empty string
      var newText = '';
      // change value of empty string
      newText += '<div class=\'col\'>'+'<div class=\'card-container\'>'+'<div class=\'card\'>'+'<div class=\'face front\'>'+'<img src =\'img/cardback.jpg\' />' + '</div>' +'<div class=\'face back\'>'+'<div class=\'cardvalue\'>'+ card +'</div>'+'</div>'+'</div>'+'</div>'+'</div>';
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


  // create variable for front of card - for click event
  var frontOfCard = document.querySelectorAll('.face.front');

  frontOfCard.forEach(function(card) {
    card.addEventListener('click', function() {
    if (counter <=1){
      // create variable for back of card
      var backOfCard = document.querySelectorAll('.face.back');
      console.log('clicked');
      console.log(card.nextSibling);
      // on click - toggle class back
      card.nextSibling.classList.toggle('back');

      var frontImage = document.querySelector('img');
      frontImage.style.display = 'none';
      // on click - toggle class front
      card.classList.toggle('front');
      // increase counter by 1
      counter +=1;
      console.log(counter);

      // push values to compare into new array
      // compare the first and second index values from that array
    } else {
      alert('Please choose another card!');
    };
  });



    // need dual click event

    // if the counter is equal to 2
      // conditional statement to evaluate matches
        // if the cards match - then increase score by 1 and alert user
        // else flip cards back over
          // toggle class front
    // else
      // ask user to choose another card

  });


  // PART II
  // 1. write function to start game - which has series of conditional statements
  // figure out how to keep track of clicks
  // check if match in click event, call back function to check if those are equal
  // figure out how to reset game




});
